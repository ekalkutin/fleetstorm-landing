import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import { TypographyProps } from '../props';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'h1' | 'h2';
} & TypographyProps &
  PropsWithChildren;

export const Title: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'h1';

  return (
    <Component
      className={clsx(styles.title, {
        [styles.muted]: props.muted,
      })}
    >
      {children}
    </Component>
  );
};
