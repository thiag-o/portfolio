'use client';

import { useEffect } from 'react';
import { Events } from 'react-scroll';

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
    Events.scrollEvent.register('begin', () => {});

    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
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
