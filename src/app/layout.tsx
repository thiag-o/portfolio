import '@/global/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import StyledComponentsRegistry from './registry';

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
