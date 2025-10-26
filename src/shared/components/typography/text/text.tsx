import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import sharedStyles from '../shared.module.css';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'p' | 'span';
  readonly muted?: boolean;
  readonly size?: 'small' | 'large';
} & PropsWithChildren;

export const Text: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'p';

  return (
    <Component
      className={clsx(sharedStyles.typography, {
        [sharedStyles.muted]: props.muted,
        [styles.small]: props.size === 'small',
        [styles.large]: props.size === 'large',
      })}
    >
      {children}
    </Component>
  );
};
