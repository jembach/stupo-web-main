import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Teachers: Page<any> = () => (
  <div>
    <Header className="bg-stupo-teacher-200" img="/images/headers/teachers.svg" alt="">
      <HeaderTitle>
        <span>Stupo im Unterricht einsetzen als</span>
        <span className="text-stupo-teacher-complement-600"> #Lehrer</span>
      </HeaderTitle>
    </Header>
  </div>
);

Teachers.title = 'Für Lehrer | Stupo';
Teachers.keywords = 'IT-Sicherheit, Lehrer, Stupo';
Teachers.description = 'Hier findest du den Bereich für Lehrer von Stupo.';

export default Teachers;
