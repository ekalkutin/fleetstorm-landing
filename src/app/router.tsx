import { createBrowserRouter } from 'react-router';

import { HomePage } from 'pages/home/home';
import { Layout } from 'widgets/layout/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ],
  },
]);
