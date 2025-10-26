import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import { TypographyProps } from '../props';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'p' | 'span';
} & TypographyProps &
  PropsWithChildren;

export const Text: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'p';

  return (
    <Component
      className={clsx(styles.text, {
        [styles.muted]: props.muted,
        [styles.small]: props.size === 'small',
        [styles.large]: props.size === 'large',
      })}
    >
      {children}
    </Component>
  );
};
