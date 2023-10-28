import { Navigate, RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Album } = lazyImport(() => import('@/features/contents/routes/Album'), 'Album');
const { Contents } = lazyImport(() => import('@/features/contents/routes/Contents'), 'Contents');
const { Memory } = lazyImport(() => import('@/features/contents/routes/Memory'), 'Memory');
const { Menu } = lazyImport(() => import('@/features/contents/routes/Menu'), 'Menu');
const { Schedule } = lazyImport(() => import('@/features/contents/routes/Schedule'), 'Schedule');
const { Seating } = lazyImport(() => import('@/features/contents/routes/Seating'), 'Seating');

export const protectedRoutes: RouteObject[] = [
  { path: '/contents', element: <Contents /> },
  { path: '/contents/memory', element: <Memory /> },
  { path: '/contents/schedule', element: <Schedule /> },
  { path: '/contents/seating', element: <Seating /> },
  { path: '/contents/menu', element: <Menu /> },
  { path: '/contents/album', element: <Album /> },
  { path: '/contents/*', element: <Navigate replace to="/" /> },
];
