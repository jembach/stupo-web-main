import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

import { Page } from '../types';

const Quiz: Page<any> = () => (
  <div>
    <Header theme="stupo-quiz" img="/images/headers/quiz.svg" alt="">
      <HeaderTitle>
        <span>
          Du Weist alles - <br />
          Prüfe deinen Wissensstand im
        </span>
        <span className="text-stupo-quiz-complement-400"> #Quiz</span>
        <br />
        <Button className="bg-stupo-quiz-complement-400 text-white">Quiz beginnen</Button>
      </HeaderTitle>
    </Header>
  </div>
);

Quiz.title = 'Quiz | Stupo';
Quiz.keywords = 'Quiz, Medienbildung, Test, Schule, IT-Sicherheit';
Quiz.description =
  'Im Quiz kannst du deine Fähigkeiten und Kenntnisse im Bereich IT-Sicherheit testen.';

export default Quiz;
