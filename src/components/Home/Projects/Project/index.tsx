import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Body,
  ButtonGroup,
  ButtonPrimary,
  ButtonSecundary,
  Container,
  DescriptionGroup,
  DescriptionProject,
  Header,
  ImageContainer,
  Title,
} from './styles';

interface IProjectProps {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  linkAccess?: string;
  linkGithub: string;
}

export default function Project({
  title,
  description,
  img,
  linkAccess,
  linkGithub,
}: IProjectProps) {
  function handleNavigation(url?: string) {
    if (!url) return;
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <ImageContainer>
          <Image
            src={img.src}
            width={300}
            height={280}
            alt={img.alt}
            unoptimized={true}
          />
        </ImageContainer>

        <DescriptionGroup>
          <DescriptionProject>{description}</DescriptionProject>
          <ButtonGroup>
            {linkAccess && (
              <ButtonPrimary onClick={() => handleNavigation(linkAccess)}>
                ACESSAR
              </ButtonPrimary>
            )}
            <ButtonSecundary onClick={() => handleNavigation(linkGithub)}>
              <Image
                src={'/contact-icons/github.svg'}
                height={24}
                width={24}
                alt="github"
                priority
              />
            </ButtonSecundary>
          </ButtonGroup>
        </DescriptionGroup>
      </Body>
    </Container>
  );
}
