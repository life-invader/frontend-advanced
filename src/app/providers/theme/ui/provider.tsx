import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx } from 'app/providers/theme/lib/ctx';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.light;

interface ThemeProviderProps {
  children: ReactNode | ReactNode[];
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const ctxProps = useMemo(() => {
    return { theme: theme, setTheme };
  }, [theme]);

  return <ThemeCtx.Provider value={ctxProps}>{children}</ThemeCtx.Provider>;
};
