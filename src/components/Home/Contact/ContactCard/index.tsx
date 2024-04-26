import Image from 'next/image';
import React from 'react';

import { Container, Text } from './styles';

interface IContactCard {
  name: string;
  image: string;

  href: string;
}

export default function ContactCard({ name, image, href }: IContactCard) {
  return (
    <Container href={href}>
      <Image
        src={`/contact-icons/${image}.svg`}
        alt="linkedin"
        priority
        width={24}
        height={24}
      />
      <Text>{name}</Text>
    </Container>
  );
}
