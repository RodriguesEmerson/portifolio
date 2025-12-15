import { PageModel } from "@/components/pageModel";
import Image from "next/image";
import { Menu } from "./menu";
import { MenuMobile } from "./menu-bolile";

export function Header() {
   return (
      <header className="fixed top-0 h-14 left-0 z-100 border-b border-b-gray-700 w-screen overflow-hidden">
         <PageModel>
            <div className="flex justify-between items-center p-2 sm:px-3">
               <div>
                  <div className="h-10 w-40 rounded-md overflow-hidden">
                     <Image src={"/erlogo.avif"} width={200} height={50} alt="Logo do site Emerson Rodrigues Desenvolvedor Fullstack" priority fetchPriority="high"/>
                  </div>
               </div>
               <div className="max-[900px]:hidden mr-3">
                  <Menu />
               </div>
               <div className="min-[900px]:hidden">
                  <MenuMobile />
               </div>
            </div>
         </PageModel>
      </header>
   )
}