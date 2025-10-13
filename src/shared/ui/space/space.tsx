import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = PropsWithChildren & {};

export const Space: React.FC<Props> = props => {
  return <div className={styles.content}>{props.children}</div>;
};
