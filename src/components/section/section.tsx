import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import { Badge } from 'components/badge/badge';
import { Container } from 'components/container/container';

import styles from './styles.module.css';

type Props = {
  readonly name: string;
  readonly headline: string;
  readonly description: string;
  readonly className?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section className={clsx(styles.container, props.className)}>
      <Container>
        <div className={styles.headline}>
          <Badge>{props.name}</Badge>
          <h2>{props.headline}</h2>
          <p>{props.description}</p>
        </div>
        <div>{props.children}</div>
      </Container>
    </section>
  );
};
