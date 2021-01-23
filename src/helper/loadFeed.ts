import RssParser from 'rss-parser';
import dayjs from 'dayjs';
import { EnhanceRssFeedItem } from '../types';

const feedUrls = [
  'https://www.bsi-fuer-buerger.de/SiteGlobals/Functions/RSSFeed/RSSNewsfessBSIFB/RSSNewsfeed_Buerger_aktuelle_Informationen.xml;jsessionid=741A98681D5E6E3B3D8D055060CDF578.2_cid503',
];

export default async function loadFeed(): Promise<EnhanceRssFeedItem[]> {
  const rssParser = new RssParser();

  const feeds = await Promise.all(feedUrls.map((feedUrl) => rssParser.parseURL(feedUrl)));
  const items = feeds
    .map((feed) =>
      feed.items.map((item) => ({ ...item, image: feed.image?.url || null, author: feed.title }))
    )
    .flat()
    .sort((a, b) => (dayjs(a.pubDate).isAfter(dayjs(b.pubDate)) ? -1 : 1));

  return items;
}
