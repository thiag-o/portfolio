import React from 'react';

import { technologies } from '@/utils/tecnologies';
import { tools } from '@/utils/tools';

import TechnologyCard from '../TechnologyCard';
import {
  Container,
  Content,
  ListCards,
  SectionTitle,
  TecnologiesSection,
  ToolsSection,
} from './styles';

export default function Technologies() {
  return (
    <Container>
      <Content className="container">
        <h2>Tecnologias</h2>
        <h5>
          Recursos e ferramentas tecnológicas que utilizo para desenvolvimento.
        </h5>

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
  );
}
