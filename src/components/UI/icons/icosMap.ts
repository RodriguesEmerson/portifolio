import { IconsMapType } from "@/types/iconsTypes";
import { ChartJsIcon } from "./chartjsIcon";
import { CSSIcon } from "./cssIcon";
import { FigmaIcon } from "./figmaIcon";
import { FireBaseIcon } from "./firebaseIcon";
import { GitHubIcon } from "./gitHubIcon";
import { GitIcon } from "./gitIcon";
import { HTMLIcon } from "./htmlIcon";
import { InsomniaIcon } from "./insomniaIcon";
import { JSIcon } from "./jsIcon";
import { MySQLIcon } from "./mySQLIcon";
import { NextIcon } from "./nextIcon";
import { PHPIcon } from "./phpIcon";
import { SaasIcon } from "./saasIcon";
import { TSIcon } from "./tsIcon";
import { TWIcon } from "./twIcon";
import { VercelIcon } from "./vercelIcon";
import { ZustandIcon } from "./zustandIcon";

/**
 * Mapeamento centralizado de ícones utilizados no projeto.
 *
 * Cada chave do objeto representa o identificador de uma tecnologia
 * (ex: "tw", "next", "php") e cada valor é o respectivo componente React
 * responsável por renderizar o ícone.
 *
 * Esse padrão permite:
 * - Buscar dinamicamente o componente do ícone baseado em uma string vinda de um array.
 * - Evitar condicionais como `if` ou `switch` em outros arquivos.
 * - Garantir que todas as tecnologias suportadas estejam tipadas (via `IconsMapType`).
 *
 * Observações:
 * - Alguns ícones (como GitHub e Vercel) são funções que retornam o componente
 *   com props pré-definidas (ex: tamanho "md" e somente ícone desativado).
 */
export const IconsMap: IconsMapType = {
   tw: TWIcon,
   next: NextIcon,
   chartjs: ChartJsIcon,
   css: CSSIcon,
   figma: FigmaIcon,
   firebase: FireBaseIcon,
   gitHub: () => GitHubIcon({onlyIcon:false, size:"md"}),
   git: GitIcon,
   html: HTMLIcon,
   insomnia: InsomniaIcon,
   js: JSIcon,
   mySQL: MySQLIcon,
   php: PHPIcon,
   saas: SaasIcon,
   ts: TSIcon,
   vercel: () => VercelIcon({onlyIcon:false, size:"md"}),
   zustand: ZustandIcon
};