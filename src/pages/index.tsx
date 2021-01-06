import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Home: Page<any> = () => (
  <div>
    <Header theme="stupo-main" img="/images/headers/main.svg" alt="">
      <HeaderTitle>
        <span>Die Platform für digitale Medien</span>
        <span className="text-stupo-main-complement-600"> #Stupo</span>
      </HeaderTitle>
    </Header>
  </div>
);

Home.title = 'Stupo - Die Platform für digitale Medien';
Home.keywords = 'Medienbildung, digitale Medien, Schüler, Lehrer, IT-Sicherheit';
Home.description =
  'Stupo bietet dir eine zentrale Anlaufstelle, wo du dich über IT-Sicherheit informieren kannst.';

export default Home;
