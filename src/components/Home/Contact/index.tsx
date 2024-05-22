import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Element } from 'react-scroll';
import { toast, Toaster } from 'sonner';
import {} from 'zod';

import FormField from '@/components/Shared/FormField';
import HeaderSection from '@/components/Shared/HeaderSection';
import { EHttpStatusCode } from '@/global/enums/EHttpStatusCode';

import ContactCard from './ContactCard';
import { resolver } from './ContactCard/schema';
import {
  ContactCards,
  ContactContainer,
  Container,
  Content,
  Form,
  Icon,
  SendButton,
} from './styles';

interface IFormValues {
  name: string;
  email: string;
  subject: string;
}

const defaultValues: IFormValues = {
  name: '',
  email: '',
  subject: '',
};
export default function Contact() {
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>({
    resolver: zodResolver(resolver),
  });

  const [isSending, setIsSending] = useState(false);

  const variants = {
    hover: { x: 20, scale: 1.1 },
  };

  async function onSubmit(values: IFormValues) {
    setIsSending(true);

    const sendMail = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(values),
    });

    const response = await sendMail.json();

    if (sendMail.status === EHttpStatusCode.CREATED) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }

    reset(defaultValues);
    setIsSending(false);
  }

  return (
    <Element name="contact">
      <Container>
        <Content className="container">
          <HeaderSection
            name="Contato"
            subtitle="Entre em contato: preencha o formulário ou conecte-se diretamente pelas minhas redes."
          />

          <ContactContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                error={errors.name}
                control={control}
                title="Nome"
                name="name"
              />
              <FormField
                error={errors.email}
                control={control}
                title="Email"
                name="email"
              />
              <FormField
                error={errors.subject}
                control={control}
                title="Assunto"
                name="subject"
                isTextArea
              />
              <SendButton disabled={isSending} whileHover="hover" type="submit">
                <span>{isSending ? 'ENVIANDO...' : 'ENVIAR'} </span>

                <Icon variants={variants} />
              </SendButton>
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
