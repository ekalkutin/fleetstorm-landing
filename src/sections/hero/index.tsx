import clsx from 'clsx';
import { Check, Zap, Lock } from 'lucide-react';
import React from 'react';

import { Button } from 'shared/components/button/button';
import { Container } from 'shared/components/container';
import { Space } from 'shared/components/space/space';

import styles from './styles.module.css';

export const Hero: React.FC = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <Container className={styles.container}>
        <div className={styles.title}>
          <h1>Управление автопарком</h1>
          <h2>нового поколения</h2>
        </div>
        <div className={styles.cta}>
          <Button>Попробовать бесплатно</Button>
        </div>
        <Space className={styles.benefits}>
          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Check size={14} />
            </div>
            <div>Без кредитной карты</div>
          </div>

          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Zap size={14} />
            </div>
            <div>Настройка за 5 минут</div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Lock size={14} />
            </div>
            <div>Безопасность данных</div>
          </div>
        </Space>
      </Container>
    </div>
  );
};
