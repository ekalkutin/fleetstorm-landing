import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import sharedStyles from '../shared.module.css';
import { TypographyProps } from '../shared.props';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'h1' | 'h2' | 'h3';
} & TypographyProps &
  PropsWithChildren;

export const Title: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'h2';

  return (
    <Component
      style={{ fontWeight: props.weight }}
      className={clsx(sharedStyles.typography, styles.title, {
        [sharedStyles.muted]: props.muted,
        [styles.small]: props.as == 'h3',
        [styles.large]: props.as === 'h1',
      })}
    >
      {children}
    </Component>
  );
};
