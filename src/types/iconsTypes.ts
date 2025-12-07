import { JSX } from "react"
import { TechnologiesType } from "./projectCardTypes"


export type IconsSizeType = "sm" | "md" | "lg" | undefined

export type IconsMapType = {
   [key in TechnologiesType]: () => JSX.Element
}