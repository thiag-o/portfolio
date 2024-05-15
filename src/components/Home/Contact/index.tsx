import React from 'react';
import { Element } from 'react-scroll';

import FormField from '~/components/Shared/FormField';
import HeaderSection from '~/components/Shared/HeaderSection';

import ContactCard from './ContactCard';
import {
  ContactCards,
  ContactContainer,
  Container,
  Content,
  Form,
  SendButton,
} from './styles';

export default function Contact() {
  return (
    <Element name="contact">
      <Container>
        <Content className="container">
          <HeaderSection
            name="Contato"
            subtitle="Entre em contato: preencha o formulário ou conecte-se diretamente pelas minhas redes."
          />

          <ContactContainer>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormField title="Nome" name="nome" />
              <FormField title="Email" name="email" />
              <FormField title="Assunto" name="assunto" isTextArea />
              <SendButton>ENVIAR</SendButton>
            </Form>

            <ContactCards>
              <ContactCard name="Linkedin" image="linkedin" href="#" />
              <ContactCard name="GitHub" image="github" href="#" />
              <ContactCard name="Email" image="email" href="#" />
            </ContactCards>
          </ContactContainer>
        </Content>
      </Container>
    </Element>
  );
}
