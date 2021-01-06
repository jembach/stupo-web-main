import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Compass: Page<any> = () => (
  <div>
    <Header theme="stupo-compass" img="/images/headers/compass.svg" alt="">
      <HeaderTitle>
        <span>Den richtigen weg gehen mit dem digitalen</span>
        <span className="text-stupo-compass-complement-600"> #Kompass</span>
      </HeaderTitle>
    </Header>
  </div>
);

Compass.title = 'IT-Kompass | Stupo';
Compass.keywords = 'IT-Kompass, Schüler, Medienbildung';
Compass.description =
  'Der IT-Kompass ist ein an der Otto-von-Guericke Universität entwickelter Leitfaden wie du sicher und ohne auszuspioniert zu werden das Internet benutzen kannst.';

export default Compass;
