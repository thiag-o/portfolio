import Image from 'next/image';
import React from 'react';

import {
  Body,
  ButtonGroup,
  ButtonPrimary,
  ButtonSecundary,
  Container,
  DescriptionGroup,
  DescriptionProject,
  Header,
  ImageContainer,
  Title,
} from './styles';

export default function Project() {
  return (
    <Container>
      <Header>
        <Title>Pokedéx React</Title>
      </Header>
      <Body>
        <ImageContainer>
          <Image
            src="/projects/pokedex-react.png"
            width={300}
            height={280}
            alt="pokedex-react"
            unoptimized={true}
          />
        </ImageContainer>

        <DescriptionGroup>
          <DescriptionProject>
            O Pokedéx React é uma plataforma onde você pode pesquisar por
            Pokémons, visualizar seus atributos, tipos e evoluções, além de
            poder salvar seus Pokémons favoritos para referência futura.
          </DescriptionProject>
          <ButtonGroup>
            <ButtonPrimary>ACESSAR</ButtonPrimary>
            <ButtonSecundary>
              <Image
                src={'/contact-icons/github.svg'}
                height={24}
                width={24}
                alt="github"
                priority
              />
            </ButtonSecundary>
          </ButtonGroup>
        </DescriptionGroup>
      </Body>
    </Container>
  );
}
