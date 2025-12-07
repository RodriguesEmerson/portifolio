import Link from "next/link";
import { VercelIcon } from "../icons/vercelIcon";

export function DeployBtnLink({ link }: { link: string }) {
   return (
      <div className="group w-fit bg-linear-to-r from-(--second-color) to-(--third-color) p-0.5 rounded-full transition-all">
         <Link href={link} className="flex flex-row gap-1 items-center justify-center h-8 w-fit px-2 overflow-hidden rounded-full bg-black">
            <span className="w-fit lg:w-0 lg:-ml-1 group-hover:ml-0 group-hover:w-14 overflow-hidden transition-all">Deploy</span>
            <div className="w-5 h-5 pointer-events-none overflow-hidden">
               <VercelIcon onlyIcon={true} size="sm" />
            </div>
         </Link>
      </div>
   )
}