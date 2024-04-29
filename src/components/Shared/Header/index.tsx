import React from 'react';

import {
  Container,
  Logo,
  Navigation,
  NavigationItem,
  NavigationList,
} from './styles';

export default function Header() {
  return (
    <Container className="container">
      <Logo>Logo</Logo>
      <Navigation>
        <NavigationList>
          <NavigationItem>Sobre</NavigationItem>
          <NavigationItem>Tecnologias</NavigationItem>
          <NavigationItem>Projetos</NavigationItem>
          <NavigationItem>Contato</NavigationItem>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
