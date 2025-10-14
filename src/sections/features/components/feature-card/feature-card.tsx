import React from 'react';

import styles from './styles.module.css';

type Props = {
  readonly title: string;
  readonly description: string;
};

export const FeatureCard: React.FC<Props> = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
