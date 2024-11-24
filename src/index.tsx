import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { AboutPageAsync } from './pages/about/about.lazy';
import { MainPageAsync } from './pages/main/main.lazy';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
