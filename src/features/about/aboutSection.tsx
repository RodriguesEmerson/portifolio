import { PageModel } from "@/components/pageModel";

export function AboutSection() {
   return (
      <PageModel model="white" id="about-me" trasnsitionImg={true}>
         <div className="flex flex-col gap-3 min-h-[93vh] pt-5 px-2 pb-11">
            <div className="flex flex-row gap-2 items-center bg-[#8A11D310] px-2 rounded-md">
               <h2 className="text-2xl w-fit py-2 font-bold bg-linear-to-r from-(--third-color) to-(--second-color) bg-clip-text text-transparent">Sobre mim</h2>
            </div>
            <div className="flex flex-col gap-2 text-(--main-text-color) py-2 max-w-[700px] mx-auto indent-5">
               <p>
                  Sou Emerson, <strong>desenvolvedor fullstack em formação e apaixonado por resolver problemas através da tecnologia</strong>. Minha jornada sempre teve um ponto em comum: criar do zero e transformar ideias em algo real.
               </p>
               <p>
                  Antes de entrar no mundo da programação, passei por áreas que moldaram muito do meu jeito de trabalhar.
                  Sou violinista desde os meus 13 anos, fui professor de música(voluntário), também fui fotógrafo por 8 anos e hoje atuo como Hoperador de Higienização Industrial. Toda essa diversidade me ensinou disciplina, atenção aos detalhes e a buscar sempre a melhor execução possível.
                  Comecei meus estudos em programação em 2022 e, desde então, venho evoluindo entre projetos reais e estudos estruturados.
               </p>
               <p>
                  Atualmente estou focado em projetos fullstack com Next.js, React, Tailwind e Zustand no frontend e PHP, APIs REST, autenticação segura com JWT + Refresh Token, MySQL no backend. Também estou explorando bancos NoSQL, como o Firestore, em busca de arquiteturas mais eficientes para projetos dinâmicos.
               </p>
               <p>
                  Como um bom aprendiz, gosto de novos desafios, aprender coisas novas e transformar conceitos em soluções práticas. Gosto de criar aplicações completas, do design do banco ao layout da interface, sempre buscando clareza, organização e performance.
               </p>
               <p><strong>
                  Hoje meu objetivo é evoluir como fullstack e construir projetos sólidos que agreguem valor, enquanto aprofundo meu
                  conhecimento em tecnologias modernas e boas práticas de desenvolvimento.</strong>
               </p>
            </div>
         </div>
      </PageModel>
   )
}