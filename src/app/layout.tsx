import type { Metadata, Viewport } from "next";
import { Ubuntu, Inter } from "next/font/google";
import { Providers } from '@/theme/Providers';
import { Header, Footer } from '@/components';

import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Consultorios Médicos David",
  description: "Excelencia Médica",
  icons: {
    icon: [
      { url: '/cmd_isologo_green.png', media: '(prefers-color-scheme: light)' },
      { url: '/cmd_isologo_white.png', media: '(prefers-color-scheme: dark)' }
    ]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html
      lang="es"
      className={`${ubuntu.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet" />
      </head>
      <body className={`${ubuntu.className} ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
