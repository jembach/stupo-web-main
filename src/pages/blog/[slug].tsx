import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

import { Page } from '../../types';
import { BlogEntry, loadBlogEntries, loadBlogEntry } from '../../helper/loadBlog';
import Navigation from '../../components/Navigation';

type BlogProps = {
  blogEntry: BlogEntry;
};

const Blog: Page<BlogProps> = ({ blogEntry }) => (
  <>
    <Head>
      <title>{blogEntry.title}</title>
      <meta name="description" content={blogEntry.description} />
      <meta property="og:title" content={blogEntry.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`http://stupo.vercel.app/blog/${blogEntry.title}`} />
      <meta
        property="og:image"
        content={`http://stupo.vercel.app/images/blog/${blogEntry.image}`}
      />
    </Head>
    <Navigation theme="stupo-blog" />
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <Link href="/blog" passHref>
            <a
              href="/blog"
              title="Blogeinträge"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Blogeinträge
            </a>
          </Link>
          <h1 className="mt-8">
            <span className="block text-base text-center text-stupo-blog-complement-600 font-semibold tracking-wide uppercase">
              {blogEntry.category}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {blogEntry.title}
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">{blogEntry.description}</p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div className="w-full">
            <Image
              layout="responsive"
              className="rounded-lg"
              objectFit="cover"
              src={blogEntry.image}
              width={471}
              height={200}
            />
          </div>
          <ReactMarkdown>{blogEntry.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  </>
);

Blog.title = '';
Blog.keywords = '';
Blog.description = '';

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  const { slug } = context.params;

  const blogEntry = await loadBlogEntry(Array.isArray(slug) ? slug[0] : slug);

  if (!blogEntry) {
    return { notFound: true };
  }

  return { props: { blogEntry } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogEntries = await loadBlogEntries();

  return { fallback: false, paths: blogEntries.map(({ slug }) => ({ params: { slug } })) };
};
