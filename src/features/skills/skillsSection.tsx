import { PageModel } from "@/components/pageModel";

const hardSkills: { title: string; skills: string[]; }[] = [
   {
      title: "Frontend",
      skills: [
         "HTML, CSS, JavaScript",
         "React / Next.js",
         "TypeScript",
         "TailwindCSS",
         "Sass",
         "SEO (estrutura semântica e boas práticas)"
      ]
   },
   {
      title: "Backend",
      skills: [
         "PHP (puro)",
         "Criação de APIs REST",
         "Autenticação com JWT",
         "MySQL / MariaDB (modelagem, consultas e otimização básica)",
         "Firebase"
      ]
   },
   {
      title: "Banco de Dados",
      skills: [
         "Modelagem relacional",
         "phpMyAdmin",
         "Firestore – NoSQL",
         "MySQL / MariaDB (modelagem, consultas e otimização básica)"
      ]
   },
   {
      title: "Estrutura e DevOps",
      skills: [
         "Deploy com Vercel",
         "Linux básico (navegação, permissões, manipulação de arquivos)",
         "XAMPP – Apache local"
      ]
   },
   {
      title: "Ferramentas",
      skills: [
         "VS Code",
         "Git e GitHub",
         "Postman / Insomnia para testes de APIs",
         "Figma (protótipos simples e criação de layouts)"
      ]
   },
   {
      title: "Outras",
      skills: [
         "Google Analytics",
         "Google Search Console",
         "Google reCAPTCHA",
         "Resend / NodeMailer (envio de e-mails em servidor)",
         "Zod",
         "Zustand",
         "React Hook Form",
         "Cloudinary (armazenamento e otimização de imagens via SDK)"
      ]
   }
];

const softSkills = [
   {
      skills: [
         "Proatividade",
         "Disciplina",
         "Pensamento Analítico",
         "Autodidatismo forte",
         "Comunicação Clara",
         "Foco em Resolver Problemas",
         "Criatividade",
         "Trabalho em Equipe"
      ]
   }
];

const formacoesECursos = [
   {
      skills: [
         "Análise e Desenvolvimento de Sistemas (Unifran) – 2024 / 2026",
         "PHP 8 From Beginner to Advanced (Udemy) – 2025",
         "Inglês (Fluency Academy) – 2025 / 2026",
         "JavaScript e TypeScript do básico ao avançado (Udemy) – 2024",
         "HTML, CSS, JavaScript (Udemy) – 2023",
      ]
   }
];




export function SkillsSection() {
   return (
      <PageModel id="skills" trasnsitionImg={true}>
         <div className="flex flex-col gap-2 items-start min-h-screen p-2 pt-5 pb-10">
            <div className="flex flex-col gap-2 bg-[#8A11D310] px-2 rounded-md w-full">
               <h2 className="text-2xl w-fit py-2 font-bold bg-linear-to-r from-(--third-color) to-(--second-color) bg-clip-text text-transparent">Skills,  Formações e Cursos</h2>
            </div>
            <div className="flex flex-row flex-wrap flex-[1_1] gap-5 m-auto p-2">
               <div>
                  <h2 className="font-semibold text-xl">Hard Skills</h2>
                  <div className="flex flex-col gap-2">
                     <SkillsList list={hardSkills} />
                  </div>
               </div>
               <div className="flex flex-col gap-5">
                  <div>
                     <h2 className="font-semibold text-xl">Soft Skills</h2>
                     <div className="flex flex-col gap-2">
                        <SkillsList list={softSkills} />
                     </div>
                  </div>
                  <div>
                     <h2 className="font-semibold text-xl">Formações e Cursos</h2>
                     <div className="flex flex-col gap-2">
                        <SkillsList list={formacoesECursos} />
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </PageModel>
   )
}

function SkillsList({ list }: { list: { title?: string; skills: string[]; }[] }) {
   return (
      <>
         {
            list.map(skill => (
               <div key={`key${skill.skills[0]}`}>
                  {skill.title &&
                     <h3 className="font-semibold">{skill.title}</h3>
                  }
                  <ul className="font-light list-disc list-inside pl-2">
                     {skill.skills.map(item => (
                        <li key={`item${item}`} className="text-sm sm:text-base">{item}</li>
                     ))}
                  </ul>
               </div>
            ))
         }
      </>
   )
}