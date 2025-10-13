import React from 'react';

import { Button } from 'shared/ui/button/button';
import { Container } from 'shared/ui/container/container';
import { Spacer } from 'shared/ui/spaces/spacer';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <div>Logo</div>
          <Spacer>
            <Button>Возможности</Button>
            <Button>Демо</Button>
            <Button>Стоимость</Button>
            <Button>Контакты</Button>
          </Spacer>
          <Spacer>
            <Button>Войти</Button>
            <Button type='primary'>Начать бесплатно</Button>
          </Spacer>
        </nav>
      </Container>
    </header>
  );
};
