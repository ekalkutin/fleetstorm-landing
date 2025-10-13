import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

const { Content } = Layout;

export const CommonLayout: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
