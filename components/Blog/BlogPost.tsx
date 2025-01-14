'use client';

import { IBlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostProps {
  post: IBlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Link href={`https://velog.io/@kimkuns/${post.url_slug}`}>
      <motion.div
        className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:opacity-80 hover:ml-4 transition-all duration-300"
      >
        <div className="relative w-full md:w-[30%] h-[200px] md:h-[180px] rounded-xl overflow-hidden">
          <Image
            src={post.thumbnail || '/images/default-blog-thumbnail.jpg'}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 py-4 md:py-0 md:pl-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-neutral">{post.tags[0]}</span>
          </div>
          <h2 className="text-neutral-light text-lg md:text-xl font-bold mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
            {post.short_description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
