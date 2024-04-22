'use client';
import { ThemeProvider } from 'styled-components';

import Introduction from '@/components/Introdution';
import theme from '@/global/theme';

import { Container } from './styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Introduction />
      </Container>
    </ThemeProvider>
  );
}
