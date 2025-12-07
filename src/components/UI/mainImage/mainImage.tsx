import Image from "next/image";
import { ImageArrows } from "./imageArrows";

const sizes = {
   sm: 'min-w-25 min-h-23 w-20 h-18',
   md: '',
   xl: 'min-w-63 min-h-57 w-[35vw] h-[32vw]'
}

export function MainImage({ includeArrows = false, size = 'xl' }: { includeArrows?: boolean, size?: 'sm' | 'md' | 'xl' }) {


   return (
      <div className={`relative ${sizes[size]} max-w-100 max-h-92 flex items-center justify-center`}>
         {includeArrows &&
            <ImageArrows />
         }
         <div className="relative w-[86%] max-w-90 h-[93%] max-h-90 rounded-full">
            <span className="block w-full h-full rounded-full absolute left-0 w-ful bg-[#78C5E420] animate-pulse">
            </span>
            <div 
               className={`absolute top-[8%] left-[8%] w-[83%] h-[83%] ${size==='xl' ? 'min-[1205px]:top-7 min-[1205px]:left-7 max-w-77 max-h-77' : ''}  rounded-full overflow-hidden z-10`}
            >
               <Image src={'/images/profile.avif'} priority height={200} width={200} alt="Emerson Rodrigues image"
                  className="w-full"
               />
            </div>
         </div>
      </div>
   )
}