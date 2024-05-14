import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components';
import React from 'react';

const baseUrl =
  'https://portfolio-git-main-thiagos-projects-394c4155.vercel.app';

const github = baseUrl + '/contact-icons/github-black.svg';
const linkedin = baseUrl + '/contact-icons/linkedin-black.svg';
const email = baseUrl + '/contact-icons/email-black.svg';
const logo = baseUrl + '/logo-black.svg';

export default function Contact() {
  return (
    <Html lang="pt-BR">
      <Head></Head>
      <Body style={main}>
        <Container style={container}>
          <Heading>
            <Img src={logo} alt="thiag-o" height={42} width={166}></Img>
          </Heading>

          <Text style={h3}>
            Olá <span style={strong}>Nome</span> quem fala é o Thiago e agradeço
            pelo seu contato! em breve irei responder a esse email
            <span style={strong}> nome@email.com</span> sobre o assunto:
          </Text>

          <Section style={subjectContainer}>
            <Text style={p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab,
              nulla odit voluptates quis enim ad quo sunt atque repellat
              molestiae corrupti quia, aut quibusdam aliquam reprehenderit
              necessitatibus rem esse.
            </Text>
          </Section>
          <Text style={{ ...h3 }}>
            Fique a vontade para falar comigo através das minhas redes:
          </Text>
          <Section style={footer}>
            <Row>
              <Column>
                <Button style={button} href="https://github.com/thiag-o">
                  <Img height={32} width={32} src={github} alt="github" />
                </Button>
              </Column>
              <Column>
                <Button
                  style={button}
                  href="https://www.linkedin.com/in/thiago-borges-mansano-5b67811a2/"
                >
                  <Img height={32} width={32} src={linkedin} alt="linkedin" />
                </Button>
              </Column>
              <Column>
                <Button style={button} href="mailto:thiagobmansano@gmail.com">
                  <Img height={32} width={32} src={email} alt="email" />
                </Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
// https://wa.me/5514996640587

const primaryColor = '#FE4A3E';
const blackTone = '#2E2E2E';

const fontFamily =
  "-apple-system,  BlinkMacSystemFont, 'Raleway', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily,
};

const h3: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.4,
  fontWeight: 500,
  color: blackTone,
};

const strong: React.CSSProperties = {
  color: primaryColor,
};

const p: React.CSSProperties = {
  margin: 0,
  color: blackTone,
};

const subjectContainer: React.CSSProperties = {
  borderLeftWidth: '4px',
  borderLeftStyle: 'solid',
  borderLeftColor: primaryColor,
  paddingLeft: '12px',
};

const container: React.CSSProperties = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const footer: React.CSSProperties = {
  margin: 0,
  width: '160px',
};

const button: React.CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${primaryColor}`,
  width: '40px',
  height: '40px',
  borderRadius: '40px',
};
