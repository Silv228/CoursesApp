import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Tag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size? : 's' | 'l';
    color? : 'ghost' | 'red' | 'green' | 'grey' | 'primary';
    children : ReactNode;
    href? : string;
}