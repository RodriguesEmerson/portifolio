import Link from "next/link";
import { GitHubIcon } from "../icons/gitHubIcon";

export function GitHubBtnLink({ link }: { link: string }) {
   return (
      <div className="group w-fit bg-linear-to-r from-(--second-color) to-(--third-color) p-0.5 rounded-full transition-all">
         <Link href={link} className="flex flex-row gap-1 items-center justify-center h-8 w-fit px-2 overflow-hidden rounded-full bg-black">
            <span className="w-fit lg:w-0 lg:-ml-1 group-hover:ml-0 group-hover:w-14 overflow-hidden transition-all">GitHub</span>
            <div className="w-5 h-5 pointer-events-none overflow-hidden">
               <GitHubIcon onlyIcon={true} size="sm" />
            </div>
         </Link>
      </div>
   )
}