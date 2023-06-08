import React, { KeyboardEvent } from "react";
import cn from 'classnames'
import style from './Sort.module.css'
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./sort.svg"

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>, sort: SortEnum): void => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault()
            setSort(sort)
        }
    }
    return (
        <div className={cn(style.sort, className)} {...props}>
            <span tabIndex={0} onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => handleKeyDown(e, SortEnum.Rating)} onClick={() => setSort(SortEnum.Rating)} className={cn(style.sortItem, {
                [style.active]: SortEnum.Rating === sort
            })}>
                <SortIcon className={style.sortIcon}
                /> По рейтингу
            </span>
            <span tabIndex={0} onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => handleKeyDown(e, SortEnum.Price)} onClick={() => setSort(SortEnum.Price)} className={cn(style.sortItem, {
                [style.active]: SortEnum.Price === sort
            })}>
                <SortIcon className={style.sortIcon} /> По цене
            </span>
        </div>
    )
}

export default Sort