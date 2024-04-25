'use client';

import { ThemeProvider } from 'styled-components';

import About from '@/components/Home/About';
import Contact from '@/components/Home/Contact';
import Introduction from '@/components/Home/Introdution';
import Projects from '@/components/Home/Projects';
import Technologies from '@/components/Home/Technologies';
import Footer from '@/components/Shared/Footer';
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
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
