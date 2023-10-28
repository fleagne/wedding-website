import { Navigate, RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { HomeRoutes } = lazyImport(() => import('@/features/home/routes/HomeRoutes'), 'HomeRoutes');
const { EntryRoutes } = lazyImport(() => import('@/features/entry/routes/EntryRoutes'), 'EntryRoutes');
const { Login } = lazyImport(() => import('@/features/login/routes/Login'), 'Login');

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomeRoutes /> },
  { path: '/entry/*', element: <EntryRoutes /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <Navigate replace to="/" /> },
];
