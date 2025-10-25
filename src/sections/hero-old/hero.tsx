import clsx from 'clsx';
import { ArrowRight, Check, Lock, Zap } from 'lucide-react';
import React from 'react';

import { Button } from 'components/button/button';
import { Container } from 'components/container/container';
import { Space } from 'components/space/space';

import styles from './styles.module.css';

export const Hero: React.FC = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <Container className={styles.container}>
        <div className={styles.welcome}>
          <div>
            <h1>Будущее управления автопарком уже здесь</h1>
            <h2>
              Автоматизация бронирования, управление автопарком, отслеживание
              клиентов — всё на одной платформе
            </h2>
          </div>

          <Space className={styles.ctaButtonsGroup}>
            <Button className={styles.cta} type='primary'>
              <Space>
                Начать бесплатный тест
                <ArrowRight />
              </Space>
            </Button>
            <Button className={styles.cta}>
              <Space>Начать бесплатный тест</Space>
            </Button>
          </Space>

          <Space className={styles.shortBenefits}>
            <div className={styles.shortBenefit}>
              <div className={styles.roundIcon}>
                <Check size={14} />
              </div>
              <div>Без кредитной карты</div>
            </div>

            <div className={styles.shortBenefit}>
              <div className={styles.roundIcon}>
                <Zap size={14} />
              </div>
              <div>Настройка за 5 минут</div>
            </div>
            <div className={styles.shortBenefit}>
              <div className={styles.roundIcon}>
                <Lock size={14} />
              </div>
              <div>Безопасность данных</div>
            </div>
          </Space>
        </div>
      </Container>
    </div>
  );
};
