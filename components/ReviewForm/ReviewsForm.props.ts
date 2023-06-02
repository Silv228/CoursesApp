import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewsFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    productId: string;
}