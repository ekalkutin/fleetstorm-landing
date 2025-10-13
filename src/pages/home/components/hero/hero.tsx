import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space } from 'antd';
import clsx from 'clsx';
import React from 'react';

import { Container } from 'shared/ui/container/container';

import styles from './styles.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={clsx(styles.section, styles.background)}>
      <Container>
        <Row>
          <Col xs={16}>
            <h1>Будущее управления автопарком уже здесь.</h1>
            <h2>
              Автоматизация бронирования, управление автопарком, отслеживание
              клиентов — всё на одной платформе
            </h2>
            <Space>
              <Button
                iconPosition='end'
                icon={<ArrowRightOutlined />}
                size='large'
                type='primary'
              >
                Начать бесплатный тест
              </Button>
              <Button type='text' color='primary' variant='outlined'>
                Забронировать демо
              </Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col>
            <Space></Space>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
