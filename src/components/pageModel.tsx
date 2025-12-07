

export function PageModel({ model = 'blue', id, trasnsitionImg = false, children }:
   { model?: 'blue' | 'white', id?: string, trasnsitionImg?: boolean, children: React.JSX.Element }) {

   const models = {
      blue: 'bg-(--main-color)',
      white: 'bg-white'
   }
   return (
      <section className={`relative ${models[model]} min-w-full text-white overflow-hidden scroll-mt-12`} id={id}>
         <div className={` m-auto ${id !== "projects" ? 'max-w-[1224px]': 'max-w-[1332px]'}`}>
            {children}
         </div>
         {trasnsitionImg &&
            <div className={`absolute w-full -bottom-1 left-0 ${model === 'blue' ? 'bg-[url("/images/line-gradient-bolls.png")]' : 'bg-[url("/images/line-gradient-bolls-2.png")]'} h-10 bg-repeat-round bg-contain`}></div>
         }
      </section>
   )
}