import React from 'react';

import {
  AddicionalTitle,
  AdditionalInfo,
  AdditionalSubtitle,
  Container,
  Content,
  DescriptionPerson,
  Icon,
  ImagePerson,
  ImgBackground,
  Person,
  TitlePerson,
} from './styles';

export default function Introduction() {
  return (
    <Container>
      <ImgBackground />
      <Content>
        <Person>
          <ImagePerson
            width={250}
            height={250}
            src="https://github.com/thiag-o.png"
            alt="foto de thiago"
          />
          <TitlePerson>
            Oi, eu sou <strong>Thiago Mansano</strong>
          </TitlePerson>
          <DescriptionPerson>Um desenvolvedor web</DescriptionPerson>
        </Person>

        <AdditionalInfo>
          <AddicionalTitle>Bacharel em ciência da computação.</AddicionalTitle>

          <AdditionalSubtitle>
            Atualmente trabalhando no ramo de tecnologia como desenvolvedor
            front-end.
          </AdditionalSubtitle>
          <Icon />
        </AdditionalInfo>
      </Content>
    </Container>
  );
}
