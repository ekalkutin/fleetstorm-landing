import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

export const Logo: React.FC = () => {
  return (
    <div className={clsx(styles.container)}>
      <span>Fleet</span>Storm
    </div>
  );
};
