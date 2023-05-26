import React from "react";
import cn from 'classnames'
import style from './Sort.module.css'
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./sort.svg"

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(style.sort, className)} {...props}>
            <span onClick={() => setSort(SortEnum.Rating)} className={cn(style.sortItem, {
                [style.active]: SortEnum.Rating === sort
            })}>
                <SortIcon className={style.sortIcon}
                /> По рейтингу
            </span>
            <span onClick={() => setSort(SortEnum.Price)} className={cn(style.sortItem, {
                [style.active]: SortEnum.Price === sort
            })}>
                <SortIcon className={style.sortIcon} /> По цене
            </span>
        </div>
    )
}

export default Sort