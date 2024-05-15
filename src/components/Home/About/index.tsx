import React from 'react';
import { Element } from 'react-scroll';

import SectionTitle from '~/components/Shared/HeaderSection';

import {
  Container,
  Content,
  QuoteAuthor,
  QuoteDivider,
  QuoteIcon,
  QuoteSection,
  QuoteText,
} from './styles';

export default function About() {
  return (
    <Element name="about">
      <Container>
        <Content className="container">
          <SectionTitle name="Sobre" />
          <p>
            Sou um apaixonado por criar experiências web excepcionais como
            desenvolvedor front-end. Com uma mente curiosa e uma paixão pela
            resolução de problemas, busco constantemente desafios que me
            permitam expandir meu conhecimento e habilidades no campo da
            tecnologia.
          </p>
          <p>
            Desde o início da minha jornada como desenvolvedor, tenho me
            dedicado ao estudo e aprendizado em desenvolvimento e design,
            estabelecendo conexões profissionais (networking) e compartilhando
            meu mundo criativo. Participei de diversos projetos desafiadores,
            que à primeira vista pareciam complexos e intimidadores. Entretanto,
            foi justamente nessas situações que encontrei as maiores
            oportunidades de aprendizado e crescimento.
          </p>
          <QuoteSection>
            <QuoteIcon />
            <QuoteText>Deus está nos detalhes</QuoteText>
            <QuoteDivider />
            <QuoteAuthor>Ludwig Mies van der Rohe</QuoteAuthor>
          </QuoteSection>
        </Content>
      </Container>
    </Element>
  );
}
