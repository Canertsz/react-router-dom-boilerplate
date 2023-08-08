import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout/index.jsx';
import { HomePage } from './pages/home/index.jsx';
import { About } from './pages/about/index.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
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
      ])}
    />
  </StrictMode>
);
