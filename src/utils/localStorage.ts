const PREFIX = 'wedding_website_';

const PATHS = ['user', 'entry'];

export const localStorage = {
  get: (path: 'user' | 'entry') => {
    return JSON.parse(window.localStorage.getItem(`${PREFIX}${path}`) as string);
  },
  set: (path: 'user' | 'entry', data: string) => {
    window.localStorage.setItem(`${PREFIX}${path}`, data);
  },
  clear: () => {
    PATHS.map((p) => window.localStorage.removeItem(`${PREFIX}${p}`));
  },
};
