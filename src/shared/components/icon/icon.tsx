import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  readonly className?: string;
  readonly size?: number;
  readonly children: React.ReactElement<{
    size?: number;
  }>;
};

export const Icon: React.FC<Props> = props => {
  const { size = 24 } = props;

  return (
    <div
      className={clsx(styles.wrapper, props.className)}
      style={{
        width: size,
        height: size,
      }}
    >
      {React.cloneElement(props.children, {
        size: size / 2,
      })}
    </div>
  );
};
