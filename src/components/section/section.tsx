import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly className?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section className={clsx(styles.container, props.className)}>
      {props.children}
    </section>
  );
};
