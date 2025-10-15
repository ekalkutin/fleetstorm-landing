import React from 'react';

import { Card } from 'components/card/card';
import { Section } from 'components/section/section';

import { FEEDBACKS } from './constants';
import styles from './styles.module.css';

export const Feedback: React.FC = () => {
  return (
    <Section
      name='Отзывы клиентов'
      headline='Что говорят наши клиенты'
      description='Более 500 компаний по всей России уже выбрали Fleetstorm'
    >
      <div className={styles.container}>
        {FEEDBACKS.map((feedback, index) => {
          return (
            <Card key={index}>
              <div>{feedback.rating}</div>
              <div>{feedback.content}</div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
