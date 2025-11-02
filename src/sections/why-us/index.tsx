import React from 'react';

import { Badge } from 'shared/components/badge';
import { Card } from 'shared/components/card';
import { Section } from 'shared/components/section';
import { Typography } from 'shared/components/typography';

import styles from './styles.module.css';

export const WhyUs: React.FC = () => {
  return (
    <Section
      headline='Почему именно мы?'
      description='Мощные инструменты для автоматизации и масштабирования бизнеса'
      name='Проверено на 5000+ компаниях'
    >
      <div className={styles.container}>
        <Card className={styles.card}>
          <Badge size='small'>Аналитика</Badge>
          <Typography.Title as='h3' weight={400}>
            Снижение затрат на 35%
          </Typography.Title>
          <Typography.Text muted>
            Оптимизация маршрутов, контроль расхода топлива и своевременное
            обслуживание сокращают операционные расходы.
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            - 35% операционных затрат парка
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            - 28% расход топлива
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            + 42% эффективность
          </Typography.Text>
        </Card>
        <Card className={styles.card}>
          <Typography.Title as='h3' weight={400}>
            Экономия 15 часов в неделю
          </Typography.Title>
          <Typography.Text muted>
            Автоматизация рутинных задач освобождает время менеджеров для
            стратегических задач.
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            15 часов/неделю
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            60 часов/месяц
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            = 1.5 месяца работы в год
          </Typography.Text>
        </Card>
        <Card className={styles.card}>
          <Typography.Title as='h3' weight={400}>
            Решения на основе данных
          </Typography.Title>
          <Typography.Text muted>
            Детальная аналитика в реальном времени для принятия обоснованных
            бизнес-решений.
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            200+ метрик
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            Реал-тайм дашборды
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            Прогнозная аналитика
          </Typography.Text>
        </Card>
        <Card className={styles.card}>
          <Typography.Title as='h3' weight={400}>
            99.9% доступность
          </Typography.Title>
          <Typography.Text muted>
            Отказоустойчивая инфраструктура с автоматическим резервированием и
            защитой данных.
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            99.9% uptime
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            Авто-бэкапы 24/7
          </Typography.Text>
          <Typography.Text muted monospace weight={500}>
            ISO 27001 сертификация
          </Typography.Text>
        </Card>
      </div>
    </Section>
  );
};
