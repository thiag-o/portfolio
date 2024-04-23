import React from 'react';

import HeaderSection from '@/components/Shared/HeaderSection';

import { Container, Content } from './styles';

export default function Contact() {
  return (
    <Container>
      <Content className="container">
        <HeaderSection
          name="Contato"
          subtitle="Entre em contato: preencha o formulário ou conecte-se diretamente pelas minhas redes."
        />
      </Content>
    </Container>
  );
}
