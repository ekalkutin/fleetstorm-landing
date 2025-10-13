import { Button, Flex, Layout, Space } from 'antd';
import React from 'react';

import { Container } from 'shared/ui/container/container';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <Container>
        <Flex align='center' justify='space-between'>
          Logo
          <Flex gap={'middle'} className={styles.container}>
            <Button type='text'>Home</Button>
            <Button type='text'>Features</Button>
            <Button type='text'>Pricing</Button>
            <Button type='text'>Contact</Button>
          </Flex>
          <Space>
            <Button type='primary'>Войти</Button>
            <Button type='primary'>Начать бесплатно</Button>
          </Space>
        </Flex>
      </Container>
    </Layout.Header>
  );
};
