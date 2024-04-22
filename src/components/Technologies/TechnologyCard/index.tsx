import Image from 'next/image';
import React from 'react';

import { Container, Description, ImageContainer } from './styles';

interface ITechnologyCardProps {
  name: string;
  image: string;

  cardType: 'tech' | 'tool';
}

export default function TechnologyCard({
  name,
  image,
  cardType,
}: ITechnologyCardProps) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`${cardType === 'tech' ? '/technologies' : '/tools'}/${image}`}
          alt={name}
          width={48}
          height={48}
        />
      </ImageContainer>
      <Description>{name}</Description>
    </Container>
  );
}
