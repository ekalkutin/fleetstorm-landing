import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly className?: string;
} & PropsWithChildren;

export const Container: React.FC<Props> = props => {
  return (
    <div className={clsx(styles.container, props.className)}>
      {props.children}
    </div>
  );
};
