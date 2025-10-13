import { ConfigProvider } from 'antd';
import React from 'react';
import { RouterProvider } from 'react-router';

import { router } from './router';
import { theme } from './styles/theme';

import './styles/index.css';

export const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};
