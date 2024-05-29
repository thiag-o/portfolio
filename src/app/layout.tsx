import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
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
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
      </head>
      <body className={`${raleway.className} ${raleway.variable}`}>
        <StyledComponentsRegistry>
          <Contexts>{children}</Contexts>
        </StyledComponentsRegistry>
        <Toaster richColors closeButton />
      </body>
      <script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/d5024a2c-d6f2-48d9-b2f5-aa4b8b658601-loader.js"
      ></script>
    </html>
  );
}
