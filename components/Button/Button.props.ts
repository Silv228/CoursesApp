import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface Button extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance?: 'primary' | 'ghost',
    arrow?: 'right' | 'down' | 'none',
    children: ReactNode
}