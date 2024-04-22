import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import StyledComponentsRegistry from './registry';

const raleway = Raleway({ subsets: ['latin'] });

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
      <body className={raleway.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
