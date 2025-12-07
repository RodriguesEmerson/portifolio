import { PageModel } from "@/components/pageModel";
import Link from "next/link";
import { MainImage } from "../../components/UI/mainImage/mainImage";
import { IconsBar } from "./iconsBar";


export function HomeSection() {
   return (
      <PageModel id="home" trasnsitionImg={true}>
         <div className="flex flex-row-reverse flex-wrap flex-[1_1] gap-2 items-center justify-around min-h-screen max-[605px]: pt-18 pb-9">
            <MainImage includeArrows={true} />
            <div className="flex flex-col gap-6 w-87">
               <div>
                  <h2 className="text-[2.35rem] py-2 font-bold bg-linear-to-r from-(--third-color) to-(--second-color) bg-clip-text text-transparent">Emerson Rodrigues</h2>
                  <h1
                     className="text-(--text-gray-color) font-light tracking-widest -mt-4"
                  >Desenvolvedor FullStack</h1>
                  <p className="text-xs font-light text-(--text-gray-color) mt-1">
                     Sempre em busca de novos desafios, aprendizados
                     e conexões com pessoas que também amam
                     transformar ideias em soluções reais.
                  </p>
               </div>
               <IconsBar />
               <div className="flex flex-row justify-between">
                  <Link
                     href={'#projects'}
                     className="block h-10 leading-7 w-40 text-center text-base font-light bg-(--second-color) py-1 px-3 rounded-3xl hover:animate-pulse"
                  >Projetos</Link>
                  <Link
                     href={'#projects'}
                     className="block h-10 w-40 text-center text-base font-light bg-linear-to-r leading-7 from-(--second-color) to-(--third-color) py-1 px-3 rounded-3xl hover:animate-pulse"
                  >Contato</Link>
               </div>
            </div>
         </div>
      </PageModel>
   )
}