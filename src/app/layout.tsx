import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import Contexts from './lib/Contexts';
import GlobalTheme from './lib/GlobalTheme';
import StyledComponentsRegistry from './lib/registry';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-default' });

export const metadata: Metadata = {
  title: 'Thiag-o',
  description: 'Portfólio de Thiago Mansano',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <body className={`${raleway.className} ${raleway.variable}`}>
        <StyledComponentsRegistry>
          <Contexts>{children}</Contexts>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
