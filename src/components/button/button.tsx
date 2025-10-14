import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly type?: 'primary' | 'secondary';
  readonly className?: string;
} & PropsWithChildren;
export const Button: React.FC<Props> = props => {
  return (
    <button
      className={clsx(styles.button, props.className, {
        [styles.primary]: props.type === 'primary',
      })}
    >
      {props.children}
    </button>
  );
};
