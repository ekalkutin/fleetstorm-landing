import React from 'react';

import { Badge } from 'components/badge/badge';
import { Container } from 'components/container/container';
import { Section } from 'components/section/section';

import { FeatureCard } from './components/feature-card/feature-card';
import { FEATURES } from './features-constant';
import styles from './styles.module.css';

export const Features: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.headline}>
          <Badge>Возможности платформы</Badge>
          <h2>Всё необходимое для эффективного бизнеса</h2>
          <p>
            Мощные инструменты для автоматизации и масштабирования вашей
            компании
          </p>
        </div>
        <div className={styles.container}>
          {FEATURES.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
