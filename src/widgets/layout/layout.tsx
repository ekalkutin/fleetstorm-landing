import { Layout as AntLayout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

import { Header } from 'widgets/header/header';

const { Content } = AntLayout;

export const Layout: React.FC = () => {
  return (
    <AntLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </AntLayout>
  );
};
