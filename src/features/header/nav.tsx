'use client';
import { DevArrow } from "@/components/UI/devArrow";
import Link from "next/link";
import { useState } from "react";

export type NavLinkType = {
   page: string, text: string
}

const navLinks: NavLinkType[] = [
   { page: 'home', text: 'Início' },
   { page: 'skills', text: 'Skills' },
   { page: 'projects', text: 'Projetos' },
   { page: 'contact', text: 'Contato' },
]

export function Nav() {
   const [currentAnchor, setCurrentAcnhor] = useState<string>('home');
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