
'use client';
import { DefaultTextArea } from "@/components/UI/defaultTextArea";
import { DefaultTextInput } from "@/components/UI/defaultTextInput";
import { Spinner } from "@/components/UI/Spinner";
import { contactSchema } from "@/schemas/contactSchema";
import { sendEmail } from "@/services/sendEmail";
import { ContactFormType } from "@/types/contactFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";


export function ContactForm() {
   const [isSending, setIsSending] = useState<boolean>(false);
   const [wasEmailSent, setwasEmailSent] = useState<'y' | 'n' | null>(null);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<ContactFormType>({
      resolver: zodResolver(contactSchema),
   });

   async function handleSendMessage(data: ContactFormType) {
      setIsSending(true);
      grecaptcha.ready(() => {
         grecaptcha.execute(`${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`, { action: 'submit' })
            .then(async (token) => {
               const emailSent = await sendEmail({ ...data, captchaToken: token });
               setIsSending(false);
               if (emailSent.ok) {
                  reset();
                  return setwasEmailSent('y');
               }
               return setwasEmailSent('n');
            })
      })
   }

   return (
      <div>
         <form className="flex flex-col gap-1 max-w-[95vw] w-100 bg-[#8A11D310] p-2 rounded-md shadow-[0px_0px_20px_3px_rgba(0,0,0,0.01)]" onSubmit={handleSubmit(handleSendMessage)}>
            <DefaultTextInput label="Nome" {...register('name')} error={errors.name} />
            <DefaultTextInput label="Assunto" {...register('subject')} error={errors.subject} />
            <DefaultTextInput label="E-mail" {...register('email')} error={errors.email} />
            <DefaultTextArea label="Mensagem" {...register('message')} error={errors.message} />
            <button type="submit" className='w-full flex flex-row gap-4 items-center justify-center bg-linear-to-r from-(--second-color) to-(--third-color) p-2 m-auto rounded-md text-white hover:cursor-pointer'>
               <span>Enviar</span>
               {!isSending
                  ? <SendIcon />
                  : <Spinner size="small" />
               }
            </button>
         </form>
         {wasEmailSent &&
            <div className="text-center">
               {wasEmailSent === 'y'
                  ? <span className="text-xs text-green-700">Mensagem enviada. Responderei assim que possível!</span>
                  : <span className="text-xs text-red-800">Erro ao enviar sua mensagem.</span>
               }
            </div>
         }
         {/*`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`*/}
         <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`} />
      </div>
   )
}

function SendIcon() {
   return (
      <div className="w-5 h-5">
         <svg viewBox="0 0 32 32" >
            <path d="M10.774,23.619l-1.625,5.691C9.06,29.164,9,28.992,9,28.794v-5.57l13.09-12.793L10.774,23.619z
                  M10.017,29.786c0.243-0.002,0.489-0.084,0.69-0.285l3.638-3.639l-2.772-1.386L10.017,29.786z M28.835,2.009L3.802,14.326
                  c-2.226,1.095-2.236,4.266-0.017,5.375l4.89,2.445L27.464,3.79c0.204-0.199,0.516-0.234,0.759-0.086
                  c0.326,0.2,0.396,0.644,0.147,0.935l-16.3,18.976l8.84,4.4c1.746,0.873,3.848-0.128,4.27-2.034l5.071-22.858
                  C30.435,2.304,29.588,1.639,28.835,2.009z" fill="#fff" />
         </svg>
      </div>
   )
}
