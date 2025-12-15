import { DevArrow } from "@/components/UI/devArrow";

export function ImageArrows() {
   return (
      <div className="absolute w-full h-full">
         <div className="absolute -top-7 left-0 w-fit rotate-45">
            <DevArrow size="md" />
         </div>
         <div className="absolute -bottom-7 right-0 w-fit rotate-225">
            <DevArrow size="md" />
         </div>
      </div>
   )
}