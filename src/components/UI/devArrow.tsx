
const sizes = {
   xs: 'w-3 h-3',
   sm: 'w-10 h-20',
   md: 'w-15 h-15 xl:w-20 xl:h-20',
   xl: 'w-20 h-20',
   xxl: 'w-25 h-25',
   big: 'w-35 h-35'
}

const directions = {
   up: 'rotate-0',
   right: 'rotate-90',
   bottom: 'rotate-180',
   left: '-rotate-90'
}

type DevArrowProps = {
   size?: keyof typeof sizes;
   direction?: keyof typeof directions;
}

export function DevArrow({ size = 'xs', direction = 'left', ...props }: DevArrowProps) {
   return (
      <div 
         className={`relative w-fit h-fit pb-[15%] ${directions[direction]}`}
         {...props}
      >
         <span className={`block ${sizes[size]}`}>
            <svg
               width="100%"
               height="100%"
               viewBox="0 0 200 174"
               xmlns="http://www.w3.org/2000/svg"
               role="img"
               aria-label="Triângulo"
            >
               <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="var(--second-color)" />
                     <stop offset="100%" stopColor="var(--third-color)" />
                  </linearGradient>
               </defs>
               <polygon points="100,0 0,174 200,174" fill="url(#grad)" />
            </svg>
         </span>
         <span className={`absolute ${sizes[size]} left-0 top-[17%]`}>
            <svg
               width="100%"
               height="100%"
               viewBox="0 0 200 174"
               xmlns="http://www.w3.org/2000/svg"
               role="img"
               aria-label="Triângulo"
               className=""
            >
               <polygon points="100,0 0,174 200,174" fill="#fff" />
            </svg>
         </span>
      </div>
   )
}