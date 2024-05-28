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
import { resolver } from './schema';
import {
  ContactCards,
  ContactContainer,
  Container,
  Content,
  Form,
  Icon,
  Loading,
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
    hover: { x: 5, scale: 1.05 },
    tap: { x: 0 },
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
            subtitle="Preencha o formulário ou conecte-se diretamente pelas minhas redes sociais."
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
              <SendButton
                disabled={isSending}
                whileHover="hover"
                whileTap="tap"
                type="submit"
              >
                {isSending ? (
                  <>
                    <span>ENVIANDO</span>
                    <Loading />
                  </>
                ) : (
                  <>
                    <span>ENVIAR</span>
                    <Icon variants={variants} />
                  </>
                )}
              </SendButton>
            </Form>

            <ContactCards>
              <ContactCard
                name="Linkedin"
                image="linkedin"
                href="https://www.linkedin.com/in/thiago-borges-mansano-5b67811a2"
              />
              <ContactCard
                name="GitHub"
                image="github"
                href="https://github.com/thiag-o"
              />
              <ContactCard
                name="WhatsApp"
                image="whatsapp"
                href="https://wa.me/5514996640587"
              />
            </ContactCards>
          </ContactContainer>
        </Content>
      </Container>
    </Element>
  );
}
