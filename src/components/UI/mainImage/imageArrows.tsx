'use client';
import { DevArrow } from "@/components/UI/devArrow";
import { useEffect, useState } from "react";

export function ImageArrows() {

   const [scroll, setScroll] = useState<number>(0);
   function handleScroll(){
      setScroll(Number(`${window.scrollY * 0.2}`));
   }
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);
   }, [])

   return (
      <div className="absolute w-full h-full"
         style={{rotate: `${scroll}deg`}}
      >
         <div className="absolute -top-7 left-0 w-fit rotate-45">
            <DevArrow size="md" />
         </div>
         <div className="absolute -bottom-7 right-0 w-fit rotate-225">
            <DevArrow size="md" />
         </div>
      </div>
   )
}