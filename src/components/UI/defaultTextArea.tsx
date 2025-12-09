import { FieldError } from "react-hook-form";

const sizes = {
   small: 'w-20',
   mid: 'w-30',
   large: 'w-45',
   full: 'w-full',
   xl: 'w-67'
}

type InputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
   label: string;
   width?: keyof typeof sizes;
   error?: FieldError
   textareaRef?: React.Ref<HTMLTextAreaElement> | null
}

export function DefaultTextArea({ label, width = 'full', error, textareaRef, ...props }: InputProps) {
   return (
      <div className={`flex flex-col gap-0 ${sizes[width]}`}>
         <label className="pl-1 text-sm" htmlFor={`field-${label}`}>{label}</label>
         <textarea
            ref={textareaRef}
            className={`max-h-45 h-75 px-2 py-1 border border-gray-700 rounded-md ${sizes[width]}  focus-within:outline-purple-800 focus-within:outline-1 text-sm resize-none ${error?.message ? 'outline-red-700! border-red-700!' : ''}`}
            id={`field-${label}`}
            {...props}
         />
         <div className="h-5 -mt-1 ml-1">
            {error && <span className="text-xs text-red-700">{error.message}</span>}
         </div>
      </div>
   )
}