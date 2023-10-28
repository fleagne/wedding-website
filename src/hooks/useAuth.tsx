import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useContext } from 'react';

import { auth, db } from '@/main';
import { AuthContext } from '@/providers/AuthProvider';
import { localStorage } from '@/utils/localStorage';

export const useAuth = () => {
  const { user, setUser, isLoading, setLoading } = useContext(AuthContext);

  const init = async () => {
    setLoading(true);
    const user = localStorage.get('user');
    if (user) setLoading(false);

    await auth.onAuthStateChanged(
      (u) => {
        if (!u || !u.email) return;
        localStorage.set('user', JSON.stringify({ email: u.email }));
        setUser({ email: u.email });
      },
      (e) => {
        throw e;
      },
    );
    setLoading(false);
  };

  const setEntry = async (email: string): Promise<void> => {
    const entryDocumentRef = doc(db, 'entries', email);
    getDoc(entryDocumentRef).then((res) => {
      const data = res.data();
      if (!data) return;
      localStorage.set('entry', JSON.stringify(data));
    });
  };

  const logIn = async (email: string, password: string): Promise<void> => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (!user) throw new Error('No user');
    setUser({ email });
    await setEntry(email);
  };

  const logOut = () => {
    auth.signOut();
    localStorage.clear();
    setUser(undefined);
  };

  return { init, logIn, logOut, user, setUser, isLoading, setLoading };
};
