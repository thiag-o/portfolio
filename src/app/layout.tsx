import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Head from 'next/head';
import { Toaster } from 'sonner';

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
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <body className={`${raleway.className} ${raleway.variable}`}>
        <StyledComponentsRegistry>
          <Contexts>{children}</Contexts>
        </StyledComponentsRegistry>
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
