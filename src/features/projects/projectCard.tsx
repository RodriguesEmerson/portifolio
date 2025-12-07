import { IconsMap } from "@/components/UI/icons/icosMap";
import { DeployBtnLink } from "@/components/UI/links/deployBtnLink";
import { GitHubBtnLink } from "@/components/UI/links/gitHubBtnLink";
import { ProjectInterface } from "@/types/projectCardTypes";
import Image from "next/image";

export function ProjectCard({ projectData }: { projectData: ProjectInterface }) {
   return (
      <div className="flex flex-col justify-between gap-2 w-90 sm:w-80 h-125 rounded-md p-2 bg-(--main-color) text-sm">
         <div className="bg-gray-800 w-full h-40 sm:h-36 rounded-md overflow-hidden border border-gray-700">
            <Image
               src={`/images/${projectData.image}`}
               height={190}
               width={360}
               alt={`Image de capa do projeto ${projectData.name}`}
               className="object-cover obje h-full"
            />
         </div>
         <div className="p-1">
            <h4 className="font-semibold mb-1 text-base">{projectData.name}</h4>
            <p className={`font-light max-h-40 overflow-y-auto rounded-md [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-(--second-color) ${projectData.description.length > 340 ? 'border border-gray-700 p-1' : ''}`}>{projectData.description}</p>
         </div>
         <div className="flex flex-col gap-1 font-medium">
            <p>Tecnologias usadas</p>
            <div className="flex flex-row gap-2">
               {projectData.technologies.map(tec => {
                  const Icon = IconsMap[tec];
                  if (!Icon) return null;
                  return (
                     <Icon key={`icontec-${tec}`} />
                  )
               })}
            </div>
         </div>
         <div className="flex flex-col gap-1 font-medium py-1 px-2 bg-gray-700 rounded-md">
            <p>Ver projeto</p>
            <div className="flex flex-row items-center gap-2">
               {projectData.projectLinks.map(link => {
                  if(link.name === 'GitHub'){
                     return (
                        <GitHubBtnLink key={`pjctlink-${link.name}`} link={link.link} />
                     )
                  }
                  return (
                     <DeployBtnLink key={`pjctlink-${link.name}`} link={link.link} />
                  )
               })}
            </div>
         </div>
      </div>
   )
}