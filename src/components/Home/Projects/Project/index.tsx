import Image from 'next/image';
import React from 'react';

import { Container, Header, ImageContainer, Title } from './styles';

export default function Project() {
  return (
    <Container>
      <Header>
        <Title>Pokedéx React</Title>
      </Header>
      <ImageContainer>
        <Image
          src="/projects/pokedex-react.png"
          width={300}
          height={280}
          alt="pokedex-react"
          unoptimized={true}
        />
      </ImageContainer>
    </Container>
  );
}
