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
  centered,
}: ISectionTitleProps) {
  return (
    <Container centered={centered ? 1 : 0}>
      <Title>{name}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
