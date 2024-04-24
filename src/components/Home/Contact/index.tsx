import React from 'react';

import FormField from '@/components/Shared/FormField';
import HeaderSection from '@/components/Shared/HeaderSection';

import { Container, Content, Form, FormContainer, SendButton } from './styles';

export default function Contact() {
  return (
    <Container>
      <Content className="container">
        <HeaderSection
          name="Contato"
          subtitle="Entre em contato: preencha o formulário ou conecte-se diretamente pelas minhas redes."
        />

        <FormContainer>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormField title="Nome" name="nome" />
            <FormField title="Email" name="email" />
            <FormField title="Assunto" name="assunto" isTextArea />
            <SendButton>ENVIAR</SendButton>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}
