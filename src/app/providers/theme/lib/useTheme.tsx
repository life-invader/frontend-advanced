import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx } from 'app/providers/theme/lib/ctx';

type UseTheme = () => { theme: Theme; toggleTheme: () => void };

export const useTheme: UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeCtx);

  const toggleTheme = () => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
