import React from 'react';
import { MainLayout } from '../layouts/main-layout/index.jsx';
import { HomePage } from '../pages/home/index.jsx';
import { About } from '../pages/about/index.jsx';

export const route = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
