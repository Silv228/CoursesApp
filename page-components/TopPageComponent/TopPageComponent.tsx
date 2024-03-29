import React, { useEffect, useReducer } from "react";
import style from './TopPageComponent.module.css'
import { TopPageComponentProps } from "./TopPageComponent.props";
import Htag from "@/components/Htag/Htag";
import Tag from "@/components/Tag/Tag";
import HhCard from "@/components/HhCard/HhCard";
import { TopLevelCategory } from "@/interfaces/page.interface";
import AdvantList from "@/components/AdvantList/AdvantList";
import Sort from "@/components/Sort/Sort";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";
import { Product } from "@/components/Product/Product";

const TopPageComponent = ({ page, firstCategory, products, ...props }: TopPageComponentProps): JSX.Element => {

    const [{ products: sortProducts, sort }, sortDispatch] = useReducer(sortReducer, { products, sort: SortEnum.Rating },)
    const setSort = (sort: SortEnum): void => {
        sortDispatch({ type: sort })
    }
    useEffect(() => {
        sortDispatch({ type: 'reset', initialState: products })
        setSort(SortEnum.Rating)
    }, [products])

    return (
        <>
            {page ? <div className={style.wrapper} {...props}>
                <div className={style.titleBlock}>
                    <Htag tag="h1">{page.title}</Htag>
                    <Tag color="grey" size="l">{products.length}</Tag>
                    <Sort sort={sort} setSort={setSort} />
                </div>
                {sortProducts && sortProducts.map(p => <Product layout key={p._id} product={p} />)}
                {firstCategory === TopLevelCategory.Courses && <div className={style.categoryHeader}>
                    <Htag tag="h2">Вакансии - {page.category}</Htag>
                    <Tag size="l" color="red">hh.ru</Tag>
                </div>}
                {firstCategory === TopLevelCategory.Courses && page.hh && <HhCard  {...page.hh} />}
                {page.advantages && page.advantages.length !== 0 && page.advantages[0].title !== '' && <AdvantList advantages={page.advantages} />}
                {page.seoText && <div className={style.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
                <div className={style.tagsBlock}>
                    <Htag tag="h2">Получаемые навыки</Htag>
                    <div className={style.tags}>
                        {page.tags.map((tag) => <Tag className={style.tag} key={tag} color="primary" size="s">{tag}</Tag>)}
                    </div>
                </div>
            </div> : <></>}
        </>
    )
}

export default TopPageComponent