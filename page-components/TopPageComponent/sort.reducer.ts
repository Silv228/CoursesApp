import { SortEnum } from "@/components/Sort/Sort.props";
import { ProductItem } from "@/interfaces/product.interface";

export type SortAction = { type: SortEnum }

export interface SortReducerState {
    sort: SortEnum;
    products: ProductItem[];
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
    switch (action.type) {
        case SortEnum.Rating:
            return ({
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => b.initialRating - a.initialRating)
            })
        case SortEnum.Price:
            return ({
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price - b.price)
            })
        default:
            throw new Error('Invalid sort type')
    }
}