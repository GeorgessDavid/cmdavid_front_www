import type { Metadata } from "next";
import { Ubuntu, Inter } from "next/font/google";
import { Providers } from '@/theme/Providers';
import { Header } from '@/components';
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html
      lang="es"
      className={`${ubuntu.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className={`${ubuntu.className} ${inter.className}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
