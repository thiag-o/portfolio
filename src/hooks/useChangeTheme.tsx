import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IChangeTheme {
  themeProvider: IThemeProvider;
  setThemeProvider: Dispatch<SetStateAction<IThemeProvider>>;
}
type IThemeProvider = 'dark' | 'light';

interface IChangeThemeProviderProps {
  children: React.ReactNode;
}

const ChangeThemeContext = createContext({} as IChangeTheme);

export function ChangeThemeProvider({ children }: IChangeThemeProviderProps) {
  const [themeProvider, setThemeProvider] = useState<IThemeProvider>('dark');

  return (
    <ChangeThemeContext.Provider value={{ themeProvider, setThemeProvider }}>
      {children}
    </ChangeThemeContext.Provider>
  );
}

export function useChangeTheme() {
  const context = useContext(ChangeThemeContext);
  if (!context) {
    throw new Error('useChangeTheme doesnt work without ChageThemeProvider');
  }
  return context;
}
