'use client';
import React from 'react';

import { ChangeThemeProvider } from '@/hooks/useChangeTheme';

import GlobalTheme from './GlobalTheme';

interface IContextsProps {
  children: React.ReactNode;
}

export default function Contexts({ children }: IContextsProps) {
  return (
    <ChangeThemeProvider>
      <GlobalTheme>{children}</GlobalTheme>
    </ChangeThemeProvider>
  );
}
