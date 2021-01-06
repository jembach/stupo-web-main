import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Blog: Page<any> = () => (
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
  </div>
);

Blog.title = 'Blog | Stupo';
Blog.keywords = 'Blog, IT-Sicherheit, Datenschutz, News, Cyberangriffe, Wissenswertes';
Blog.description =
  'Im Bereich Blog findest du aktuelle News zu IT-Sicherheit, Wissenswertes, wie du dich schützen kannst und vieles mehr.';

export default Blog;
