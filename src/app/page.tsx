'use client';
import { useScroll, useTransform } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import About from '@/components/About';
import Introduction from '@/components/Introdution';
import Technologies from '@/components/Technologies';
import theme from '@/global/theme';

import { Container, SectionBgShare } from './styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Introduction />

        <SectionBgShare>
          <About />
          <Technologies />
        </SectionBgShare>
      </Container>
    </ThemeProvider>
  );
}
