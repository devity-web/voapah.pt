import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Voapah - Filmagens com drone',
  description:
    'Filmagens aéreas profissionais com drones em Portugal. Criamos vídeos criativos e de alta qualidade para empresas, eventos e turismo.',
  keywords: ['drone', 'filmagens', 'aéreas', 'Portugal', 'DJI', '4k', 'videografia', 'profissional', 'casamentos', 'eventos', 'obras'],
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
