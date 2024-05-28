import React from 'react';

import { Container, Link, Text } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="container">
        <Text>
          Criado por Thiago Borges Mansano © 2024{' '}
          <Link href="https://github.com/thiag-o" target="_blank">
            github/thiag-o
          </Link>
        </Text>
      </div>
    </Container>
  );
}
