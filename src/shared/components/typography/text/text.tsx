import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import sharedStyles from '../shared.module.css';
import { TypographyProps } from '../shared.props';

import styles from './styles.module.css';

type Props = {
  readonly as?: 'p' | 'span';
  readonly size?: 'small' | 'large';
} & TypographyProps &
  PropsWithChildren;

export const Text: React.FC<Props> = props => {
  const { as, children } = props;
  const Component = as || 'p';

  return (
    <Component
      style={{ fontWeight: props.weight }}
      className={clsx(sharedStyles.typography, styles.text, {
        [sharedStyles.muted]: props.muted,
        [styles.small]: props.size === 'small',
        [styles.large]: props.size === 'large',
        [styles.monospace]: props.monospace,
      })}
    >
      {children}
    </Component>
  );
};
