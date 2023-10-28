import { createContext, useMemo, useState } from 'react';

import { localStorage } from '@/utils/localStorage';

interface IUser {
  email: string;
}

interface IAuthContext {
  user?: IUser;
  setUser: (user?: IUser) => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  setUser: () => console.log(),
  isLoading: true,
  setLoading: () => console.log(),
});

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | undefined>(localStorage.get('user'));

  const context = useMemo(
    () => ({
      user,
      setUser,
      isLoading,
      setLoading,
    }),
    [user, setUser, isLoading, setLoading],
  );

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
};
