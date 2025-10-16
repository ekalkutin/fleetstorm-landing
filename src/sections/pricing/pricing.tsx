import React from 'react';

import { Section } from 'components/section/section';

import styles from './styles.module.css';
import { SubscriptionCard } from './subscription-card/subscription-card';
import { SUBSCRIPTIONS } from './subscriptions';

export const Pricing: React.FC = () => {
  return (
    <Section
      name='Тарифы'
      headline='Выберите подходящий тариф'
      description='Прозрачные цены без скрытых платежей. Первые 14 дней бесплатно'
    >
      <div className={styles.wrapper}>
        {SUBSCRIPTIONS.map((subscription, index) => {
          return (
            <SubscriptionCard
              key={index}
              primary={subscription.primary}
              title={subscription.title}
              description={subscription.description}
              price={subscription.price}
              features={subscription.features}
            />
          );
        })}
      </div>
    </Section>
  );
};
