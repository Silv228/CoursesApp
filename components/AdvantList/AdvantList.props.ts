import { Advantage } from "@/interfaces/page.interface";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface AdvantListProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    advantages: Advantage[]
}