import React from 'react';

import { Container, Subtitle, Title } from './styles';

interface ISectionTitleProps {
  name: string;
  subtitle?: string;

  centered?: boolean;
}

export default function HeaderSection({
  name,
  subtitle,
  ...rest
}: ISectionTitleProps) {
  return (
    <Container {...rest}>
      <Title>{name}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
