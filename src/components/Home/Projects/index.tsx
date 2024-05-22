import React from 'react';
import { Element } from 'react-scroll';
import Slider, { Settings } from 'react-slick';

import HeaderSection from '@/components/Shared/HeaderSection';
import SlideArrow from '@/components/Shared/SlideArrow';
import { projects } from '@/constant/projects';

import Project from './Project';
import { Container, Content } from './styles';

export default function Projects() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    rows: 1,
    nextArrow: <SlideArrow direction="next" />,
    prevArrow: <SlideArrow direction="prev" />,
    dotsClass: 'slick-dots',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          rows: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     // slidesToShow: 2,
      //     // rows: 2,
      //     // infinite: true,
      //   },
      // },
    ],
  };
  return (
    <Element name="projects">
      <Container>
        <Content className="container">
          <HeaderSection name="Projetos" centered />

          <Slider {...settings}>
            {projects.map(
              ({ description, img, title, linkGithub, linkAccess }, index) => (
                <Project
                  description={description}
                  img={img}
                  title={title}
                  key={index}
                  linkGithub={linkGithub}
                  linkAccess={linkAccess}
                />
              )
            )}
          </Slider>
        </Content>
      </Container>
    </Element>
  );
}
