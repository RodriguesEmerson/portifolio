import { PageModel } from "@/components/pageModel";
import { ProjectInterface } from "@/types/projectCardTypes";
import { ProjectCard } from "./projectCard";


const projects: ProjectInterface[] = [
   {
      name: 'CCB Cifras - Public',
      description: 'Um site moderno e otimizado para exibição de cifras e hinos da Congregação Cristã no Brasil (CCB), desenvolvido com Next.js, TypeScript e Firebase. Utilizando cookies-consent de acordo a LGPD, e reCaptcha na página de contato para evitar spans. O foco do projeto é oferecer velocidade, acessibilidade e clareza, com páginas estáticas geradas no build para os hinos mais acessados e carregamento dinâmico para os demais. ',
      image: 'ccbcifras-image.avif',
      technologies: ['next', 'ts', 'tw', 'firebase', 'figma'],
      projectLinks: [
         { name: 'GitHub', link: 'https://github.com/RodriguesEmerson/cifras-public-version/' },
         { name: 'Deploy', link: 'https://www.ccbcifras.com/' }
      ]
   },
   {
      name: 'Organizze',
      description: 'Site de organização de financeira pessoal. Com a criação de conta, autenticação JWT, relatórios mensais e anuais, possibilidade de adicionar, exluir e editar cada lançamento, além da possibilidade de alterar a categoria de todos os laçamentos de uma só vez. Todos os dados, tanto tabelas quanto as categorias tem seu CRUD completo.',
      image: 'organizze-image.avif',
      technologies: ['next','js', 'tw', 'chartjs', 'php', 'mySQL','insomnia', 'figma'],
      projectLinks: [{ name: 'GitHub', link: 'https://github.com/RodriguesEmerson/organizze/' }]
   },
   {
      name: 'FotoSelect',
      description: 'Construí este projeto para aprender lidar com imagens em PHP e constraints no banco de dados, e pra não ficar apenas no insomnia, criei esta interface. Foram inúmeros aprendizados aqui, desde o backend e consumo de SDKs até o frontend. Nesse projeto também passei a usar DTOs (data transfer object) para validação dos dados. Também utilizei: Autenticação com JWT, urls_amigáveis, suporte a tokens passados tanto por cookies como por headersAuthorization, Middleware, Exeptions personalizados e Dispatch para validação e redirecionamento de rotas.',
      image: 'fotoselect-image.avif',
      technologies: ['next','js', 'tw', 'php', 'mySQL', 'insomnia', 'figma'],
      projectLinks: [{ name: 'GitHub', link: 'https://github.com/RodriguesEmerson/fotoselect/' }]
   },
   {
      name: 'API Rest em PHP',
      description: 'Criei essa API para aprender mais sobre APIs e melhorar a estrutura do backend. Um projeto bem organizado, tanto na questão da estrutura e fluxo dos dados, quanto na documentação, usando padrão PHPDoc e um readme bem completo, pois meu foco aqui era criar um projeto de código_limpo, seguro e manutenível. Utilizei: php 8.2, xampp e composer. Para facilitar a importação de classes e métodos usei namespaces.',
      image: 'api-php-image.avif',
      technologies: ['php', 'mySQL', 'insomnia'],
      projectLinks: [{ name: 'GitHub', link: 'https://github.com/RodriguesEmerson/api-php/' }]
   },
   {
      name: 'Portifólio',
      description: 'Este projeto é o meu portfólio profissional, desenvolvido como uma Single Page Application (SPA), com foco em performance, clareza e experiência do usuário. Ele foi planejado para apresentar minha trajetória, minhas habilidades e meus projetos de forma objetiva e otimizada. Ele também funciona é um projeto real de desenvolvimento, onde aplico as boas práticas e tecnologias que utilizo no meu dia a dia.',
      image: 'portifolio-image.avif',
      technologies: ['next', 'ts', 'tw', 'figma'],
      projectLinks: [
         { name: 'GitHub', link: 'https://github.com/RodriguesEmerson/portifolio' },
         { name: 'Deploy', link: '#' }
      ]
   },
]
export function ProjectionSection() {
   return (
      <PageModel id="projects" trasnsitionImg={true} model="white">
         <div className="flex flex-col gap-3 min-h-[93vh] pt-5 px-2 pb-11">
            <div className="flex flex-row gap-2 items-center bg-[#8A11D310] px-2 rounded-md">
               <h2 className="text-2xl w-fit py-2 font-bold bg-linear-to-r from-(--third-color) to-(--second-color) bg-clip-text text-transparent">Projetos</h2>
            </div>
            <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
               {projects.map(project => (
                  <ProjectCard key={project.name} projectData={project} />
               ))}
            </div>
         </div>
      </PageModel>
   )
}