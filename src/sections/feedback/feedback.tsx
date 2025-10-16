import { Star } from 'lucide-react';
import React from 'react';

import { Card } from 'components/card/card';
import { Section } from 'components/section/section';
import { Space } from 'components/space/space';

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
              <div>
                <Space>
                  <Star fill='#fa3' color='' /> <Star fill='#fa3' color='' />
                  <Star fill='#fa3' color='' /> <Star fill='#fa3' color='' />{' '}
                  <Star fill='#fa3' color='' />
                </Space>
              </div>
              <div>{feedback.content}</div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
