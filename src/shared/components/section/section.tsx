import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import { Badge } from 'shared/components/badge';
import { Container } from 'shared/components/container';

import { Typography } from '../typography';

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
          <Typography.Title as='h2'>{props.headline}</Typography.Title>
          <Typography.Text>{props.description}</Typography.Text>
        </div>
        {props.children}
      </Container>
    </section>
  );
};
