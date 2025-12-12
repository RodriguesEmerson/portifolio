'use client';
import { DevArrow } from "@/components/UI/devArrow";
import Link from "next/link";
import { useEffect, useState } from "react";

export type NavLinkType = {
   page: string, text: string
}

const navLinks: NavLinkType[] = [
   { page: 'home', text: 'Início' },
   { page: 'about-me', text: 'Sobre mim' },
   { page: 'skills', text: 'Skills' },
   { page: 'projects', text: 'Projetos' },
   { page: 'contact', text: 'Contato' },
]

const pages: string[] = ['home', 'about-me', 'skills', 'projects', 'contact'];

export function Menu() {
   const [currentAnchor, setCurrentAcnhor] = useState<string>('home');

   useEffect(() => {
      const sections = document.querySelectorAll('section[id]');

      if (!sections || sections.length == 0) return;

      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               const sectionId =  entry.target.id;
               if(pages.includes(sectionId)){
                  setCurrentAcnhor(sectionId);
               }
            }
         });
      }, {
         root: null,
         rootMargin: '0px',
         threshold: 0.5 // Porcentagem do elemento que deve estar visível (50%)
      })


      sections.forEach(section => observer.observe(section));

      return () => observer.disconnect(); //Clean up;
   }, [])

   return (
      <>
         <nav>
            <ul className="flex flex-row gap-7 text-sm">
               {navLinks.map(item => (
                  <li
                     key={`link${item.page}`}
                     onClick={() => setCurrentAcnhor(item.page)}
                  >
                     <Link
                        href={`#${item.page}`}
                        className="group relative flex flex-row gap-1 text-white font-normal"
                     >
                        {currentAnchor === item.page &&
                           <div className="absolute animate-pulse -left-4.5 top-1">
                              <DevArrow />
                           </div>
                        }
                        {item.text}
                        {currentAnchor === item.page &&
                           <div className="absolute animate-pulse -right-4.5 top-1">
                              <DevArrow direction="right" />
                           </div>
                        }
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   )
}