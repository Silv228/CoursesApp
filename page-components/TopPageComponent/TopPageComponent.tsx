import React from "react";
import cn from 'classnames'
import style from './TopPageComponent.module.css'
import { TopPageComponentProps } from "./TopPageComponent.props";
import Htag from "@/components/Htag/Htag";
import Tag from "@/components/Tag/Tag";
import Card from "@/components/Card/Card";
import HhCard from "@/components/HhCard/HhCard";

const TopPageComponent = ({ page, firstCategory, products, ...props }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleBlock}>
                <Htag tag="h1">{page.title}</Htag>
                <Tag color="grey" size="l">{products.length}</Tag>
                <span>Sorting</span>
            </div>
            <div className={style.categoryHeader}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag size="l" color="red">hh.ru</Tag>
            </div>
            <HhCard  {...page.hh}/>
        </div>
    )
}

export default TopPageComponent