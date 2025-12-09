import { PageModel } from "@/components/pageModel";
import Image from "next/image";
import { Nav } from "./nav";

export function Header() {
   return (
      <header className="fixed top-0 left-0 z-100 border-b border-b-gray-800 w-screen flex justify-between items-center bg-(--main-color)">
         <PageModel>
            <div className="flex justify-between items-center p-2 sm:px-3">
               <div>
                  <div className="h-10 w-40 rounded-md overflow-hidden">
                     <Image src={"/erlogo.avif"} width={200} height={50} alt="Logo do site Emerson Rodrigues Desenvolvedor Fullstack" priority/>
                  </div>
               </div>
               <div className="mr-3">
                  <Nav />
               </div>
            </div>
         </PageModel>
      </header>
   )
}