import Link from 'next/link';

// import fetcher from '@/lib/fetcher';
import type { Blog } from 'contentlayer/generated';
import { Heading, Paragraph } from 'atelier.design';

export default function BlogPost({ title, summary, slug }: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Heading size="1">{title}</Heading>
          <Paragraph size="1">{summary}</Paragraph>
        </a>
      </Link>
    </>
  );
}
