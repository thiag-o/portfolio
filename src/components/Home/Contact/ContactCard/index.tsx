import Image from 'next/image';
import { LinkProps } from 'next/link';
import React from 'react';

import { Container, Text } from './styles';

interface IContactCard extends LinkProps {
  name: string;
  image: string;
}

export default function ContactCard({ name, image, ...rest }: IContactCard) {
  return (
    <Container {...rest}>
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
