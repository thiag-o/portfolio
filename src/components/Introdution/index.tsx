import { useScroll, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  return (
    <Container>
      <ImgBackground style={{ y, opacity }} />
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
