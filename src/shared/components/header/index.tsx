import React from 'react';

import { Button } from 'shared/components/button';
import { Container } from 'shared/components/container';
import { Space } from 'shared/components/space';
import { ThemeToggle } from 'shared/components/theme-toggler';

import { Logo } from '../logo';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <Logo />
          <Space className={styles.links}>
            <Button type='text'>Возможности</Button>
            <Button type='text'>Демо</Button>
            <Button type='text'>Стоимость</Button>
            <Button type='text'>Контакты</Button>
          </Space>
          <Space>
            <ThemeToggle />
            <Button type='primary'>Войти</Button>
          </Space>
        </nav>
      </Container>
    </header>
  );
};
