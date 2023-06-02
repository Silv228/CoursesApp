import { Review } from "@/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    reviews: Review[];
    productId: string;
}