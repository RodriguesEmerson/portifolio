'use client';

import { RefObject, useEffect, useRef, useState } from "react";

const sizes = {
   sm: 'h-5 w-5 min-h-5 min-w-5',
   md: 'h-7 w-7',
   lg: 'h-10 w-10'
}

interface IconBoxProps {
   /**
    * Nome da tecnologia exibida no tooltip.
    * Ex: "React", "Next.js", "PHP".
    */
   name: string;
   /**
    * Caso true, o componente renderiza apenas o ícone,
    * escondendo o tooltip.
    * Valor padrão: `false`
    */
   onlyIcon?: boolean;
   /**
    * Valor padrão: `"md"`
    */
   size?: keyof typeof sizes;
   children: React.JSX.Element;
}

/**
 * Componente responsável por renderizar um ícone com tooltip opcional.
 *
 * - Exibe um wrapper com tamanho configurável.
 * - No evento :hover (`group-hover`), a tooltip aparece acima.
 * - A tooltip é centralizado automaticamente.
 *
 */
export function IconBox({ name, onlyIcon = false, size = 'sm', children }: IconBoxProps) {
   const tootipRef: RefObject<HTMLDivElement | null> = useRef(null);
   const [tooltipLeft, setTootipLeft] = useState<number | null>(0)

   useEffect(() => {
      setTootipLeft(tootipRef.current ? (tootipRef.current.offsetWidth / 2) - 10 : 0)
   },[]);

   return (
      <div className={`relative group cursor-default ${sizes[size]}`}>
         {!onlyIcon &&
            <div
               ref={tootipRef}
               className="absolute opacity-0 -top-10 h-fit bg-white rounded-sm group-hover:opacity-100 transition-all px-1 pointer-events-none"
               style={{ left: tooltipLeft ? `-${tooltipLeft}px` : '-50%' }}
            >
               <span className="text-xs text-(--main-color) leading-7">{name}</span>
               <div className="absolute -bottom-2 h-3 w-3 rotate-180 left-[calc(50%-6px)]">
                  <svg viewBox="0 0 128 128">
                     <path d="M64.002 8.576 128 119.424H0Zm0 0" fill="#fff"></path>
                  </svg>
               </div>
            </div>
         }
         {children}
      </div>
   )
}