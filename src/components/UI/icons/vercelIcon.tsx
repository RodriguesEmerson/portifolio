import { IconsSizeType } from "@/types/iconsTypes";
import { IconBox } from "./iconBox";

export function VercelIcon({onlyIcon = false, size = 'sm'}:{ onlyIcon?: boolean, size?: IconsSizeType}) {
   return (
      <IconBox name="Vercel"  onlyIcon={onlyIcon} size={size}>
         <svg viewBox="0 0 128 128">
            <path d="M64.002 8.576 128 119.424H0Zm0 0" fill="#fff"></path>
         </svg>
      </IconBox>
   )
}
