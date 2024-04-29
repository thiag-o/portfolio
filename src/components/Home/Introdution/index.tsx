import { useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import {
  AddicionalTitle,
  AdditionalInfo,
  AdditionalSubtitle,
  Container,
  Content,
  Icon,
  ImagePerson,
  ImgBackground,
  Person,
  TitlePerson,
} from './styles';
import Typing from './Typing';

export default function Introduction() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.25], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 0]);

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
          <Typing />
          {/* <DescriptionPerson>Um desenvolvedor web</DescriptionPerson> */}
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
