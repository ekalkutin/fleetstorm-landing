import clsx from 'clsx';
import { Check } from 'lucide-react';
import React from 'react';

import { Button } from 'shared/components/button';
import { Card } from 'shared/components/card';
import { Icon } from 'shared/components/icon/icon';

import styles from './styles.module.css';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly price?: number | string;
  readonly features: Array<string>;
  readonly primary?: boolean;
};

export const SubscriptionCard: React.FC<Props> = props => {
  return (
    <Card
      className={clsx(styles.card, {
        [styles.primary]: props.primary,
      })}
    >
      <div className={styles.inner}>
        <div className={styles.headline}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Button size='large' type={props.primary ? 'primary' : 'text'}>
          Начать бесплатно
        </Button>
        <ul className={styles.features}>
          {props.features.map((featureName, index) => {
            return (
              <li key={index}>
                <Icon className={clsx(styles.icon)}>
                  <Check />
                </Icon>
                {featureName}
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};
