import { AppProvider } from '@/providers/AppProvider';

import { AppRoutes } from './routes/AppRoutes';

export const App = (): JSX.Element => {
  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
};
