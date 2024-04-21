'use client';
import { ThemeProvider } from 'styled-components';

import theme from '@/global/theme';

import { Text } from './styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Text>Hello World</Text>
      </main>
    </ThemeProvider>
  );
}
