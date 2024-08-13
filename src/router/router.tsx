import { MainLayout } from '@components/MainLayout/MainLayout.component';
import { HomePage } from '@pages/home/Home.page';
import { NotFoundPage } from '@pages/notFound/NotFound.page';
import { ReactHookFormPage } from '@pages/reactHookForm/ReactHookForm.page';
import { UncontrolledFormPage } from '@pages/uncontrolledForm/UncontrolledForm.page';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AppRoutes } from './routes';

export const routes: RouteObject[] = [
  {
    path: AppRoutes.HOME_PAGE,
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.HOME_PAGE,
        element: <HomePage />,
      },
      {
        path: AppRoutes.REACT_HOOK_FORM_PAGE,
        element: <ReactHookFormPage />,
      },
      {
        path: AppRoutes.UNCONTROLLED_FORM_PAGE,
        element: <UncontrolledFormPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routes);
