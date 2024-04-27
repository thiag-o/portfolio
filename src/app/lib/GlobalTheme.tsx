'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/global/GlobalStyles';
import theme from '@/global/theme';

interface IGlobalThemeProps {
  children: React.ReactNode;
}
export default function GlobalTheme({ children }: IGlobalThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
