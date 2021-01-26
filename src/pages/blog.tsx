import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import loadFeed from '../helper/loadFeed';

import { EnhanceRssFeedItem, Page } from '../types';
import { BlogEntry, loadBlogEntries } from '../helper/loadBlog';

type BlogProps = { feed: EnhanceRssFeedItem[]; blogEntries: BlogEntry[] };

type BlogItemProps = {
  link: string;
  title: string;
  image: string;
  description: string;
  author: string;
  isoDate: string;
  category: string;
  external?: boolean;
};

const BlogItem = React.memo((item: BlogItemProps) => (
  <a
    href={item.link}
    target={item.external ? '_blank' : undefined}
    rel={item.external ? 'noreferrer' : undefined}
    className="flex flex-col rounded-lg shadow-lg overflow-hidden group"
  >
    <div className="flex-shrink-0 bg-gray-400">
      <div className="w-full">
        {item.image.includes('http') ? (
          <img className="w-full object-cover" src={item.image} alt={item.title} />
        ) : (
          <Image
            layout="responsive"
            height={192}
            width={512}
            objectFit="cover"
            src={item.image}
            alt={item.title}
          />
        )}
      </div>
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-stupo-blog-complement-600 uppercase">
          {item.category}
        </p>
        <div className="block mt-2">
          <p className="text-xl font-semibold text-gray-900 group-hover:underline">{item.title}</p>
          <p className="mt-3 text-base text-gray-500">{item.description}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <div>
            <span className="sr-only">{item.author}</span>
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-stupo-blog-100">
              <svg
                className="h-full w-full text-stupo-blog-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{item.author}</p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime="2020-03-16">{dayjs(item.isoDate).format('DD.MM.YYYY')}</time>
          </div>
        </div>
      </div>
    </div>
  </a>
));

const Blog: Page<BlogProps> = ({ feed, blogEntries }) => (
  <div>
    <Header theme="stupo-blog" img="/images/headers/blog.svg" alt="">
      <HeaderTitle>
        <span>
          Cookies, Tracker, Verschlüsselung -
          <br /> Erfahre alles im
        </span>
        <span className="text-stupo-blog-complement-600"> #Blog</span>
      </HeaderTitle>
    </Header>
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Wissenswertes für dich
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Wir stellen hier regelmäßig Anleitungen zur Verfügung, in denen wir dir praktisch
            erklären, wie es dir gelingt dein Umgang im Internet datensparsam zu konfigurieren.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
          {blogEntries.map((entry) => (
            <BlogItem
              key={entry.slug}
              link={`/blog/${entry.slug}`}
              title={entry.title}
              author="Stupo"
              description={entry.description}
              image={entry.image}
              isoDate={dayjs(entry.date).toISOString()}
              category={entry.category}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Neues aus der Welt
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Um euch alle aktuellen wichtigen Informationen zur Verfügung zu stellen, nutzen wir{' '}
            <i>RSS-Feeds</i> von anderen. Unter anderem den vom Bundesamt für Sicherheit in der
            Informationstechnik
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
          {feed.map((item) => (
            <BlogItem
              author={item.author}
              description={item.contentSnippet}
              image={item.image}
              isoDate={item.isoDate}
              link={item.link}
              title={item.title}
              key={item.isoDate}
              category="RSS-Feed"
              external
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

Blog.title = 'Blog | Stupo';
Blog.keywords = 'Blog, IT-Sicherheit, Datenschutz, News, Cyberangriffe, Wissenswertes';
Blog.description =
  'Im Bereich Blog findest du aktuelle News zu IT-Sicherheit, Wissenswertes, wie du dich schützen kannst und vieles mehr.';

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const [feed, blogEntries] = await Promise.all([loadFeed().catch(() => []), loadBlogEntries()]);
  return { props: { feed, blogEntries }, revalidate: 60 * 60 }; // once per hour
};

export default Blog;
