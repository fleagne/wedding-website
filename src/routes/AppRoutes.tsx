import { RouteObject, useRoutes } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

import { useAuth } from '@/hooks/useAuth';

import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';
import { ScrollTop } from './ScrollTop';

export const AppRoutes = () => {
  const { init, user, isLoading } = useAuth();

  useEffectOnce(() => {
    init();
  });

  const routes: RouteObject[] = user ? [...publicRoutes, ...protectedRoutes] : [...publicRoutes];
  const element = useRoutes(routes);

  return (
    <>
      {!isLoading && (
        <>
          <ScrollTop />
          {element}
        </>
      )}
    </>
  );
};
