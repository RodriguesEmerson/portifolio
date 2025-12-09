
import { FieldError } from "react-hook-form";

const sizes = {
   small: 'w-20',
   mid: 'w-30',
   large: 'w-45',
   full: 'w-full',
   xl: 'w-67'
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
   label: string;
   width?: keyof typeof sizes;
   error?: FieldError
}

export function DefaultTextInput({ label, width = 'full', error, ...props }: InputProps) {
   return (
      <div className={`flex flex-col gap-0 ${sizes[width]}`}>
         <label className="pl-1 text-sm" htmlFor={`field-${label}`}>{label}</label>
         <input
            className={`h-8 p-1 border border-gray-700 rounded-md ${sizes[width]}  focus-within:outline-purple-800 focus-within:outline-1 text-sm ${error?.message ? 'border-red-700! outline-red-700!' : ''}`}
            id={`field-${label}`}
            {...props}
         />
         <div className="h-5 -mt-1 ml-1">
            {error && <span className="text-xs text-red-700">{error.message}</span>}
         </div>
      </div>
   )
}
