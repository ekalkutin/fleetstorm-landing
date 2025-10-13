import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Button } from 'components/button/button';
import { Container } from 'components/container/container';
import { Space } from 'components/space/space';

import styles from './styles.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={clsx(styles.section)}>
      <Container className={styles.container}>
        <div className={styles.welcome}>
          <div>
            <h1>Будущее управления автопарком уже здесь</h1>
            <h2>
              Автоматизация бронирования, управление автопарком, отслеживание
              клиентов — всё на одной платформе
            </h2>
          </div>

          <Space>
            <Button type='primary'>
              Начать бесплатный тест
              <ArrowRight />
            </Button>
            <Button>Забронировать демо</Button>
          </Space>
        </div>
      </Container>
    </section>
  );
};
