'use client';

import { RefObject, useRef } from "react";

export function IconBox({ name, children }: { name: string, children: React.JSX.Element }) {
   const tootipRef: RefObject<HTMLDivElement | null> = useRef(null);

   return (
      <div className="relative group h-7 w-7 cursor-default">
         <div
            ref={tootipRef}
            className="absolute opacity-0 -top-10 h-fit bg-white rounded-sm group-hover:opacity-100 transition-all px-1 pointer-events-none"
            style={{ left: tootipRef.current ? `-${tootipRef.current.offsetWidth / 2 - 10}px` : '-50%' }}
         >
            <span className="text-xs text-(--main-color) leading-7">{name}</span>
            <div className="absolute -bottom-2 h-3 w-3 rotate-180 left-[calc(50%-6px)]">
               <svg viewBox="0 0 128 128">
                  <path d="M64.002 8.576 128 119.424H0Zm0 0" fill="#fff"></path>
               </svg>
            </div>
         </div>
         {children}
      </div>
   )
}