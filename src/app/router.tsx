import { createBrowserRouter } from 'react-router';

import { HomePage } from 'pages/home/home';
import { CommonLayout } from 'widgets/common-layout/common-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: CommonLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ],
  },
]);
