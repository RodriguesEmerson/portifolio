
export type TechnologiesType = 'chartjs' | 'css' | 'figma' | 'firebase' | 'gitHub' | 'git' | 'html' | 'js' | 'mySQL' | 'next' | 'php' | 'saas' | 'ts' | 'tw' | 'vercel' | 'zustand' | 'insomnia';

export interface ProjectInterface {
   name: string;
   description: string;
   image: string;
   technologies: TechnologiesType[];
   projectLinks: {name: 'GitHub' | 'Deploy', link: string}[];
}