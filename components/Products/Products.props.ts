import { ProductItem } from "@/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    products: ProductItem[];
}