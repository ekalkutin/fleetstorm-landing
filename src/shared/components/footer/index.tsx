import React from 'react';

import { Container } from 'components/container/container';
import { Space } from 'components/space/space';

import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <div className={styles.etc}>
            <div className={styles.copyrights}>
              © 2025 Fleetstorm. Все права защищены.
            </div>
            <Space className={styles.links}>
              <div>Конфиденциальность</div>
              <div>Условия</div>
              <div>Cookies</div>
            </Space>
          </div>
        </div>
      </Container>
    </footer>
  );
};
