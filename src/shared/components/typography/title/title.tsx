import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import sharedStyles from '../shared.module.css';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'h1' | 'h2';
  readonly muted?: boolean;
} & PropsWithChildren;

export const Title: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'h1';

  return (
    <Component
      className={clsx(sharedStyles.typography, styles.title, {
        [sharedStyles.muted]: props.muted,
      })}
    >
      {children}
    </Component>
  );
};
