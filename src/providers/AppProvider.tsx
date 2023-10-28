import { Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import { Loading } from '@/components/Loading';
import { queryClient } from '@/libs/reactQuery';
import { theme as myTheme } from '@/themes/theme';

import { AuthProvider } from './AuthProvider';

const theme = createTheme(myTheme);

const ErrorFallback = (): JSX.Element => {
  return (
    <>
      <Typography color="error">Something went wrong...</Typography>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </>
  );
};

interface AppProviderProps {
  children: JSX.Element;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <AuthProvider>
                  <Router>{children}</Router>
                </AuthProvider>
                <Toaster position="bottom-left" />
              </QueryClientProvider>
            </HelmetProvider>
          </ErrorBoundary>
        </Suspense>
      </ThemeProvider>
    </>
  );
};
