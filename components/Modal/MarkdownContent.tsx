'use client';

import 'github-markdown-css';

import { ComponentProps, useMemo } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

type CodeProps = ComponentProps<'code'> & {
  inline?: boolean;
  children?: React.ReactNode;
};

interface IMarkdownContentProps {
  content: string;
}

/**
 * MarkdownContent 컴포넌트
 *
 * @description
 * 마크다운 콘텐츠를 렌더링하는 컴포넌트
 * 동적 import로 로드되어 메인 번들 크기를 줄임
 *
 * @features
 * - DOMPurify로 XSS 방지
 * - GitHub Flavored Markdown 지원
 * - 코드 하이라이팅 (Prism)
 *
 * @performance
 * - react-markdown (~50KB) + react-syntax-highlighter (~188KB)
 * - 모달 열릴 때만 로드
 */
const MarkdownContent = ({ content }: IMarkdownContentProps) => {
  // XSS 방지를 위해 마크다운 콘텐츠 sanitize
  const sanitizedContent = useMemo(() => {
    if (!content) return '';
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'hr',
        'ul', 'ol', 'li',
        'blockquote', 'pre', 'code',
        'strong', 'em', 'del', 's',
        'a', 'img',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'div', 'span',
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
      ALLOW_DATA_ATTR: false,
    });
  }, [content]);

  return (
    <div className="prose prose-invert max-w-none markdown-body py-6 md:py-10">
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          code({ inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
