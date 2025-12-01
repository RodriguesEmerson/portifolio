import { CSSIcon } from "@/components/UI/icons/cssIcon";
import { FigmaIcon } from "@/components/UI/icons/figmaIcon";
import { FireBaseIcon } from "@/components/UI/icons/firebaseIcon";
import { GitHubIcon } from "@/components/UI/icons/gitHubIcon";
import { GitIcon } from "@/components/UI/icons/gitIcon";
import { HTMLIcon } from "@/components/UI/icons/htmlIcon";
import { JSIcon } from "@/components/UI/icons/jsIcon";
import { MySQLIcon } from "@/components/UI/icons/mySQLIcon";
import { NextIcon } from "@/components/UI/icons/nextIcon";
import { PHPIcon } from "@/components/UI/icons/phpIcon";
import { SaasIcon } from "@/components/UI/icons/saasIcon";
import { TSIcon } from "@/components/UI/icons/tsIcon";
import { TWIcon } from "@/components/UI/icons/twIcon";
import { VercelIcon } from "@/components/UI/icons/vercelIcon";

export function IconsBar() {
   return (
      <div className="flex flex-row gap-1">
         <NextIcon />
         <JSIcon />
         <TSIcon />
         <TWIcon />
         <HTMLIcon />
         <CSSIcon />
         <SaasIcon />
         <PHPIcon />
         <MySQLIcon />
         <GitIcon />
         <GitHubIcon />
         <FigmaIcon />
         <FireBaseIcon />
         <VercelIcon />
      </div>
   )
}