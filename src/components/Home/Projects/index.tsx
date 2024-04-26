import React from 'react';
import Slider, { Settings } from 'react-slick';

import HeaderSection from '@/components/Shared/HeaderSection';

import Project from './Project';
import { Container, Content, ProjectList } from './styles';

export default function Projects() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    rows: 1,
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
    <Container>
      <Content className="container">
        <HeaderSection name="Projetos" centered />

        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Project key={item} />
          ))}
        </Slider>
      </Content>
    </Container>
  );
}
