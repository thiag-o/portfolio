import React from 'react';
import { Element } from 'react-scroll';

import HeaderSection from '@/components/Shared/HeaderSection';
import { technologies } from '@/constant/tecnologies';
import { tools } from '@/constant/tools';

import {
  Container,
  Content,
  ListCards,
  SectionTitle,
  TecnologiesSection,
  ToolsSection,
} from './styles';
import TechnologyCard from './TechnologyCard';

export default function Technologies() {
  return (
    <Element name="technologies">
      <Container>
        <Content className="container">
          <HeaderSection
            name="Tecnologias"
            subtitle="Recursos e ferramentas tecnológicas que utilizo para desenvolvimento."
          />
          <TecnologiesSection>
            <SectionTitle>TECNOLOGIAS</SectionTitle>
            <ListCards>
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology!.name}
                  image={technology!.image}
                  name={technology!.name}
                  cardType="tech"
                />
              ))}
            </ListCards>
          </TecnologiesSection>
          <ToolsSection>
            <SectionTitle>FERRAMENTAS</SectionTitle>
            <ListCards>
              {tools.map((tool) => (
                <TechnologyCard
                  key={tool!.name}
                  image={tool!.image}
                  name={tool!.name}
                  cardType="tool"
                />
              ))}
            </ListCards>
          </ToolsSection>
        </Content>
      </Container>
    </Element>
  );
}
