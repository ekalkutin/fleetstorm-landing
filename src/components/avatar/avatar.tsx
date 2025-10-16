import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  readonly imageUrl: string;
};

export const Avatar: React.FC<Props> = props => {
  return (
    <div className={clsx(styles.container)}>
      <img src={props.imageUrl} alt='Avatar' />
    </div>
  );
};
