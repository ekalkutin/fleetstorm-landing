import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly size?: 'small' | 'large';
} & PropsWithChildren;

export const Badge: React.FC<Props> = props => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.small]: props.size === 'small',
        [styles.large]: props.size === 'large',
      })}
    >
      {props.children}
    </div>
  );
};
