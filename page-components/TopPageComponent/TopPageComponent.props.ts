import { PageModel, TopLevelCategory } from "@/interfaces/page.interface";
import { ProductItem } from "@/interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: PageModel;
    products: ProductItem[];
}