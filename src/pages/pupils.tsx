import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Pupils: Page<any> = () => (
  <div>
    <Header className="bg-stupo-pupil-200" img="/images/headers/pupils.svg" alt="">
      <HeaderTitle>
        <span>Du willst noch mehr erfahren als</span>
        <span className="text-stupo-pupil-complement-600"> #Schüler</span>
      </HeaderTitle>
    </Header>
  </div>
);

Pupils.title = 'Für Schüler | Stupo';
Pupils.keywords = 'IT-Sicherheit, Schüler, Stupo';
Pupils.description = 'Hier findest du den Bereich für Schüler von Stupo.';

export default Pupils;
