import Link from 'next/link';
import { SOCIALS } from '@/constants';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

/**
 * Social 컴포넌트
 *
 * @description
 * 소셜 미디어 링크를 표시하는 컴포넌트
 *
 * @accessibility
 * - aria-label로 각 링크에 명확한 설명 제공
 * - target="_blank" with rel="noopener noreferrer"
 */
const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles} role="list" aria-label="소셜 미디어 링크">
      {SOCIALS.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            aria-label={`${item.label} 프로필 방문`}
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
          >
            <Icon aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
