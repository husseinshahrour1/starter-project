import PageLayout from 'component/page-layout/page-layout';
import Home from 'pages/home/home';
import Materials from 'pages/materials/materials';
import { createBrowserRouter } from 'react-router-dom';
import * as ROUTES from 'routes/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { path: ROUTES.MATERIALS, element: <Materials /> },
      { path: ROUTES.HOME, element: <Home /> },
    ],
  },
]);
