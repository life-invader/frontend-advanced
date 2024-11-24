import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app/App';
import { AboutPageAsync } from 'pages/about';
import { MainPageAsync } from 'pages/main';
import { Suspense } from 'react';
import { ThemeProvider } from 'app/providers/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPageAsync />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: <AboutPageAsync />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
