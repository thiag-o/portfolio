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

const github = baseUrl + '/contact-icons/img/github-black.jpg';
const linkedin = baseUrl + '/contact-icons/img/linkedin-black.jpg';
const emailLogo = baseUrl + '/contact-icons/img/email-black.jpg';
const logo = baseUrl + '/logo-black.jpg';

interface IContactProps {
  name: string;
  email: string;
  subject: string;
}

export default function Contact({ name, email, subject }: IContactProps) {
  return (
    <Html lang="pt-BR">
      <Head></Head>
      <Body style={main}>
        <Container style={container}>
          <Heading>
            <Img src={logo} alt="thiag-o" height={42} width={166}></Img>
          </Heading>

          <Text style={h3}>
            Olá <span style={strong}>{name}</span> quem fala é o Thiago e
            agradeço pelo seu contato! em breve irei responder a esse email
            <span style={strong}> {email}</span> sobre o assunto:
          </Text>

          <Section style={subjectContainer}>
            <Text style={p}>{subject}</Text>
          </Section>
          <Text style={{ ...h3 }}>
            Fique a vontade para falar comigo através das minhas redes:
          </Text>
          <Section style={footer}>
            <Row>
              <Column>
                <Button style={button} href="https://github.com/thiag-o">
                  <Img
                    style={img}
                    height={24}
                    width={24}
                    src={github}
                    alt="github"
                  />
                </Button>
              </Column>
              <Column>
                <Button
                  style={button}
                  href="https://www.linkedin.com/in/thiago-borges-mansano-5b67811a2/"
                >
                  <Img
                    style={img}
                    height={24}
                    width={24}
                    src={linkedin}
                    alt="linkedin"
                  />
                </Button>
              </Column>
              <Column>
                <Button style={button} href="mailto:thiagobmansano@gmail.com">
                  <Img
                    style={img}
                    height={24}
                    width={24}
                    src={emailLogo}
                    alt="email"
                  />
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
  color: `${primaryColor} !important`,
  textDecoration: 'none !important',
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
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',

  border: `1px solid ${primaryColor}`,
  width: 'fit-content',
  // height: '40px',
  // width: '40px',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '40px',
};

const img: React.CSSProperties = {
  display: 'block',
  margin: '8px',
};
