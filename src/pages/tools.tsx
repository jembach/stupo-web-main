import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Tools: Page<any> = () => (
  <div>
    <Header theme="stupo-tools" img="/images/headers/tools.svg" alt="">
      <HeaderTitle>
        <span>
          Was passiert wenn ich?
          <br />
          Prüfe deine bedenken sicher
        </span>
        <span className="text-stupo-tools-complement-600"> #Tools</span>
      </HeaderTitle>
    </Header>
  </div>
);

Tools.title = 'Tools | Stupo';
Tools.keywords = 'Tools, IT-Sicherheit';
Tools.description =
  'Im Bereich Tools findest du kleine interaktive Anwendungen, mit denen du IT-Sicherheitsaspekte testen kannst.';

export default Tools;
