import type RssParser from 'rss-parser';

export type Page<P = null> = {
  title: string;
  keywords: string;
  description: string;
  // eslint-disable-next-line no-undef
  (params: P): JSX.Element;
};

export type EnhanceRssFeedItem = RssParser.Item & { image?: string; author?: string };
