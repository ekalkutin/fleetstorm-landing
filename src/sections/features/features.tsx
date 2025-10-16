import React from 'react';

import { Section } from 'components/section/section';

import { FeatureCard } from './components/feature-card/feature-card';
import { FEATURES } from './features-constant';
import styles from './styles.module.css';

export const Features: React.FC = () => {
  return (
    <Section
      name='Возможности платформы'
      headline='Всё необходимое для эффективного бизнеса'
      description='Мощные инструменты для автоматизации и масштабирования вашей компании'
    >
      <div className={styles.container}>
        {FEATURES.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              icon={feature.icon}
              imageUrl={feature.image}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </Section>
  );
};
