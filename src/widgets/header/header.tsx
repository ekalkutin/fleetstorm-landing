import React from 'react';

import { Button } from 'components/button/button';
import { Container } from 'components/container/container';
import { Space } from 'components/space/space';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <div>Logo</div>
          <Space className={styles.links}>
            <Button>Возможности</Button>
            <Button>Демо</Button>
            <Button>Стоимость</Button>
            <Button>Контакты</Button>
          </Space>
          <Space>
            <Button>Войти</Button>
            <Button type='primary'>Начать бесплатно</Button>
          </Space>
        </nav>
      </Container>
    </header>
  );
};
