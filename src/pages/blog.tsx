import { GetStaticProps } from 'next';
import React from 'react';
import dayjs from 'dayjs';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import loadFeed from '../helper/loadFeed';

import { EnhanceRssFeedItem, Page } from '../types';

const BlogItem = React.memo(({ item }: { item: EnhanceRssFeedItem }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0 bg-gray-400">
      <img className="h-48 w-full object-cover" src={item.image} alt="" />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-stupo-blog-complement-600">
          <a href={item.link} className="hover:underline" target="_blank" rel="noreferrer">
            Article
          </a>
        </p>
        <a href={item.link} className="block mt-2" target="_blank" rel="noreferrer">
          <p className="text-xl font-semibold text-gray-900">{item.title}</p>
          <p className="mt-3 text-base text-gray-500">{item.contentSnippet}</p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href={item.link} target="_blank" rel="noreferrer">
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
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">
              {item.author}
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime="2020-03-16">{dayjs(item.isoDate).format('DD.MM.YYYY HH:mm')} Uhr</time>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const Blog: Page<{ feed: EnhanceRssFeedItem[] }> = ({ feed }) => (
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
            <BlogItem item={item} />
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

export const getStaticProps: GetStaticProps<{ feed: EnhanceRssFeedItem[] }> = async () => {
  const feed = await loadFeed().catch(() => []);
  return { props: { feed }, revalidate: 60 * 60 }; // once per hour
};

export default Blog;
