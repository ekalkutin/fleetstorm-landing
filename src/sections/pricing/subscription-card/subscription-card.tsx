import clsx from 'clsx';
import { Check } from 'lucide-react';
import React from 'react';

import { Card } from 'components/card/card';
import { Icon } from 'components/icon/icon';

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
    <Card className={clsx(styles.card)}>
      <div className={styles.headline}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <ul className={styles.features}>
        {props.features.map((featureName, index) => {
          return (
            <li key={index}>
              <Icon
                className={clsx({
                  [styles.primary]: props.primary,
                })}
              >
                <Check />
              </Icon>
              {featureName}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
