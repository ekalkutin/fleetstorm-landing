import { Star } from 'lucide-react';
import React from 'react';

import { Avatar } from 'components/avatar/avatar';
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
            <Card key={index} className={styles.feedbackCard}>
              <div>
                <Space>
                  <Star fill='#fa3' color='' /> <Star fill='#fa3' color='' />
                  <Star fill='#fa3' color='' /> <Star fill='#fa3' color='' />{' '}
                  <Star fill='#fa3' color='' />
                </Space>
              </div>
              <div>{feedback.content}</div>
              <div className={styles.author}>
                <Avatar imageUrl='https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MDIyMjczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral&quot' />
                <div>
                  <div>{feedback.author.name}</div>
                  <div>{feedback.author.position}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
