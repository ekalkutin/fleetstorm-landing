import React from 'react';
import { RouterProvider } from 'react-router';
import './styles/index.css';

import { router } from './router';

export const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
