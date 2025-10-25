import React, { PropsWithChildren } from 'react';

import { Header } from 'shared/components/header';

import styles from './styles.module.css';

type Props = {} & PropsWithChildren;

export const Layout: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </div>
  );
};
