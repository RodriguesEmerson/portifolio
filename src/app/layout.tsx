import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
   variable: "--font-roboto-mono",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700"]
});
const robotoSans = Roboto({
   variable: "--font-roboto",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700"]
});

// CONFIGURANDO METADATA
export const metadata: Metadata = {
   title: "Emerson Rodrigues, desenvolvedor fullstack - Portifólio",
   description: "Portfólio de Emerson, desenvolvedor fullstack em formação. Projetos reais em PHP, Next.js, React, APIs REST, MySQL e Tailwind. Tecnologias modernas, código limpo e foco em soluções práticas.",

   openGraph: {
      title: 'Emerson Rodrigues, desenvolvedor fullstack - Portifólio',
      description: 'Portfólio de Emerson, desenvolvedor fullstack em formação. Projetos reais em PHP, Next.js, React, APIs REST, MySQL e Tailwind. Tecnologias modernas, código limpo e foco em soluções práticas..',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Emerson Rodigues desenvolvedor",
      images: [
         {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/share-image.png`,
            width: 210,
            height: 210,
            alt: "Prévia do Site",
         },
      ],
      locale: "pt_BR",
      type: "website",
   },

   twitter: {
      card: "summary_large_image",
      title: 'Emerson Rodrigues, desenvolvedor fullstack - Portifólio',
      description: 'Portfólio de Emerson, desenvolvedor fullstack em formação. Projetos reais em PHP, Next.js, React, APIs REST, MySQL e Tailwind. Tecnologias modernas, código limpo e foco em soluções práticas..',
      images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/share-image.png`],
   },

   robots: {
      follow: true,
      index: true
   },
   icons: {
      icon: [
         { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
         { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR" className="scroll-smooth">
         <body
            className={`${robotoMono.variable} ${robotoMono.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
