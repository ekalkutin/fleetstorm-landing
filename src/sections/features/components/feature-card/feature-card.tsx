import React from 'react';

import { Card } from 'components/card/card';

import styles from './styles.module.css';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly icon: React.JSX.Element;
};

export const FeatureCard: React.FC<Props> = props => {
  return (
    <Card className={styles.card}>
      <div className={styles.cover}>
        <div className={styles.icon}>{props.icon}</div>
        <img src={props.imageUrl} alt='Image' />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};
