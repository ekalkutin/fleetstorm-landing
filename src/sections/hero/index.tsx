import clsx from 'clsx';
import { Check, Zap, Lock } from 'lucide-react';
import React from 'react';

import { Button } from 'shared/components/button';
import { Container } from 'shared/components/container';
import { Space } from 'shared/components/space';
import { Typography } from 'shared/components/typography';

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
          <Button size='large'>Попробовать бесплатно</Button>
        </div>
        <Space className={styles.benefits}>
          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Check size={14} />
            </div>
            <div>
              <Typography.Text>Без кредитной карты</Typography.Text>
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Zap size={14} />
            </div>
            <div>
              <Typography.Text>Настройка за 5 минут</Typography.Text>
            </div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.roundIcon}>
              <Lock size={14} />
            </div>
            <div>
              <Typography.Text>Безопасность данных</Typography.Text>
            </div>
          </div>
        </Space>
      </Container>
    </div>
  );
};
