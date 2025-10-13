import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Button } from 'shared/ui/button/button';
import { Container } from 'shared/ui/container/container';
import { Space } from 'shared/ui/space/space';

import styles from './styles.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={clsx(styles.section, styles.background)}>
      <Container>
        <div>
          <div>
            <h1>Будущее управления автопарком уже здесь.</h1>
            <h2>
              Автоматизация бронирования, управление автопарком, отслеживание
              клиентов — всё на одной платформе
            </h2>
            <Space>
              <Button type='primary'>
                Начать бесплатный тест
                <ArrowRight />
              </Button>
              <Button>Забронировать демо</Button>
            </Space>
          </div>
        </div>
      </Container>
    </section>
  );
};
