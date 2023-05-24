import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { HhProps } from "@/interfaces/page.interface";

export interface HhCardProps extends HhProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}