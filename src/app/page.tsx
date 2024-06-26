'use client';

import { useEffect } from 'react';
import { Events, scrollSpy } from 'react-scroll';

import About from '@/components/Home/About';
import Contact from '@/components/Home/Contact';
import Introduction from '@/components/Home/Introdution';
import Projects from '@/components/Home/Projects';
import Technologies from '@/components/Home/Technologies';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

import { Container, SectionBgShare } from './styles';

export default function Home() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Introduction />
        <SectionBgShare>
          <About />
          <Technologies />
        </SectionBgShare>
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
