import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
   variable: "--font-roboto-mono",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
   title: "Emerson Rodrigues - Portifólio desenvolvedor fullstack ",
   description: "Portfólio de Emerson, desenvolvedor fullstack em formação. Projetos reais em PHP, Next.js, React, APIs REST, MySQL e Tailwind. Tecnologias modernas, código limpo e foco em soluções práticas.",

   alternates:{
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`
   },

   keywords: [
      'Portfólio',
      'Desenvolvedor Full Stack',
      'Next.js',
      'React',
      'PHP',
      'JavaScript',
      'Frontend',
      'Backend',
      'Web Developer'
   ],

   openGraph: {
      title: 'Emerson Rodrigues, desenvolvedor fullstack - Portifólio',
      description: 'Portfólio de Emerson, desenvolvedor fullstack em formação. Projetos reais em PHP, Next.js, React, APIs REST, MySQL e Tailwind. Tecnologias modernas, código limpo e foco em soluções práticas..',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Emerson Rodigues desenvolvedor",
      images: [
         {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/share-image.avif`,
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
            <Analytics />
         </body>
      </html>
   );
}
