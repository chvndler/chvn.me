import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Chandler Chappell',
    site_url: 'https://chvn.me',
    feed_url: 'https://chvn.me/feed.xml',
  });

  allBlogs.map(post => {
    feed.item({
      title: post.title,
      url: `https://chvn.me/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
