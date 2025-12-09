import { PageModel } from "@/components/pageModel";
import { ExternalLinkArrow } from "@/components/UI/icons/externalLinkArrow";
import { GitHubIcon } from "@/components/UI/icons/gitHubIcon";
import { LinkedInIcon } from "@/components/UI/icons/linkedinIcon";
import Link from "next/link";
import { ContactForm } from "./contactForm";

export function ContactSection() {
   return (
      <PageModel id="contact" trasnsitionImg={false}>
         <div className="flex flex-col gap-3 items-start min-h-[93vh] p-2 pt-5 pb-10">
            <div className="flex flex-col gap-2 bg-[#8A11D310] px-2 rounded-md w-full">
               <h2 className="text-2xl w-fit py-2 font-bold bg-linear-to-r from-(--third-color) to-(--second-color) bg-clip-text text-transparent">Contato</h2>
            </div>
            <div className="flex flex-col min-[960px]:flex-row items-center gap-5 m-auto max-w-[95vw]">
               <div>
                  <p className="font-semibold text-lg">Vamos conversar?</p>
                  <p className="font-light max-w-100 mb-5">Interessado em conversar sobre projetos, oportunidades ou tecnologia? Envie uma mensagem, responderei o mais rápido possível.</p>
                  <div className="flex flex-row justify-between gap-3 max-w-100">
                     <Link
                        href={'https://www.linkedin.com/in/emerson-rodrigues-6274b5147/'}
                        target="_blank"
                        className="group flex flex-row gap-2 items-center justify-center h-10 w-40 text-center text-base font-light bg-(--second-color) py-1 px-3 rounded-3xl"
                     >
                        <span>LinkedIn</span>
                        <div className="w-5 overflow-hidden pointer-events-none">
                           <div className="flex -ml-5 items-center flex-row group-hover:ml-0 transition-all">
                              <ExternalLinkArrow />
                              <LinkedInIcon />
                           </div>
                        </div>
                     </Link>
                     <Link
                        href={'https://github.com/RodriguesEmerson/'}
                        target="_blank"
                        className="group flex flex-row gap-2 items-center justify-center h-10 w-40 text-center text-base font-light bg-black py-1 px-3 rounded-3xl"
                     >
                        <span>GitHub</span>
                        <div className="w-5 overflow-hidden pointer-events-none">
                           <div className="flex -ml-5 items-center flex-row group-hover:ml-0 transition-all">
                              <ExternalLinkArrow />
                              <GitHubIcon onlyIcon={true} />
                           </div>
                        </div>
                     </Link>
                  </div>
               </div>
               <p className="px-5 font-light opacity-50 text-center m-auto">ou envie um email</p>
               <ContactForm />
            </div>
         </div>
      </PageModel>
   )
}