import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = PropsWithChildren;

export const Badge: React.FC<Props> = props => {
  return <div className={styles.container}>{props.children}</div>;
};
