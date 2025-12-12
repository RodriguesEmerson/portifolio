'use client';
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

export function MenuMobile() {
   const [currentAnchor, setCurrentAcnhor] = useState<string>('home');
   const [isOpen, seIsOpen] = useState<boolean>(false);

   useEffect(() => {
      const sections = document.querySelectorAll('section[id]');

      if (!sections || sections.length == 0) return;

      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               const sectionId = entry.target.id;
               if (pages.includes(sectionId)) {
                  setCurrentAcnhor(sectionId);
               }
            }
         });
      }, {
         root: null,
         rootMargin: '100px',
         threshold: 0.25 // Porcentagem do elemento que deve estar visível (25%)
      })


      sections.forEach(section => observer.observe(section));

      return () => observer.disconnect(); //Clean up;
   }, [])

   return (
      <div>
         <button
            title="menu-mobile"
            className="flex flex-col items-center justify-center p-0.5 gap-1 h-10 w-10 rounded-md border border-white overflow-hidden"
            onClick={() => seIsOpen(!isOpen)}
         >
            <span className="h-1 w-full inline-block bg-white rounded-md"></span>
            <span className="h-1 w-full inline-block bg-white rounded-md"></span>
            <span className="h-2 w-full inline-block text-xs leading-2">menu</span>
         </button>
         {/* <Activity mode={isOpen ? 'visible' : 'hidden'}> */}
         <nav className={`fixed top-14 bg-white w-[90vw] max-w-85 h-[calc(100vh-56px)] shadow-[-7px_0px_20px_8px_rgba(0,0,0,0.2)] ${isOpen ? 'right-0' : '-right-full'} transition-all`}>
            <ul className="flex flex-col gap-5 text-base text-(--main-color) p-2">
               {navLinks.map(item => (
                  <li
                     key={`link${item.page}`}
                     onClick={() => setCurrentAcnhor(item.page)}
                  >
                     <Link
                        href={`#${item.page}`}
                        className={`relative block font-normal w-full text-center py-2 rounded-md ${currentAnchor === item.page ? 'bg-[#010E36] text-white' : ''}`}
                     >
                        {item.text}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
         {/* </Activity> */}
      </div>
   )
}