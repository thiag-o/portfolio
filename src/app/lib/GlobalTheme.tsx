'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/global/GlobalStyles';
import { darkTheme, lightTheme } from '@/global/theme';
import { useChangeTheme } from '@/hooks/useChangeTheme';

interface IGlobalThemeProps {
  children: React.ReactNode;
}
export default function GlobalTheme({ children }: IGlobalThemeProps) {
  const { themeProvider } = useChangeTheme();

  return (
    <ThemeProvider theme={themeProvider === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
