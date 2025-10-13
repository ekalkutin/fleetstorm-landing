import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = PropsWithChildren & {};

export const Spacer: React.FC<Props> = props => {
  return <div className={styles.content}>{props.children}</div>;
};
