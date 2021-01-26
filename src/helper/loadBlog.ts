/* eslint-disable unicorn/no-useless-undefined */
import fs from 'fs';
import dayjs from 'dayjs';
import matter from 'gray-matter';

export type BlogEntry = {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
  description: string;
  image: string;
};

export async function loadBlogEntry(slug: string): Promise<BlogEntry | undefined> {
  const fileData = await fs.promises
    .readFile(`${process.cwd()}/blog/${slug}.md`, 'utf-8')
    .catch(() => '');

  if (!fileData) {
    return undefined;
  }

  const {
    data,
    content,
  }: { content: string; data: { [K in keyof BlogEntry]?: BlogEntry[K] } } = matter(fileData);

  if (!data.title) {
    return undefined;
  }

  if (!data.category) {
    return undefined;
  }

  if (!data.date) {
    return undefined;
  }

  if (!data.description) {
    return undefined;
  }

  if (!data.image) {
    return undefined;
  }

  return {
    slug,
    content,
    date: data.date,
    image: data.image,
    title: data.title,
    category: data.category,
    description: data.description,
  };
}

export async function loadBlogEntries(): Promise<BlogEntry[]> {
  const files = await fs.promises.readdir(`${process.cwd()}/blog`);

  const blogs: BlogEntry[] = [];

  await Promise.all(
    files.map(async (fileName) => {
      // eslint-disable-next-line no-useless-escape
      if (/^[\w\-]*\.md$/.test(fileName)) {
        const blogEntry = await loadBlogEntry(fileName.replace('.md', ''));
        if (blogEntry) {
          blogs.push(blogEntry);
        }
      }
    })
  );

  return blogs.sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1));
}
