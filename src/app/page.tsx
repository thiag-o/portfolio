'use client';

import { ThemeProvider } from 'styled-components';

import About from '@/components/Home/About';
import Introduction from '@/components/Home/Introdution';
import Projects from '@/components/Home/Projects';
import Technologies from '@/components/Home/Technologies';
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
        <Projects />
      </Container>
    </ThemeProvider>
  );
}
