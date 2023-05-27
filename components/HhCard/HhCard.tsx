import React from "react";
import { HhCardProps } from "./HhCard.props";
import style from './HhCard.module.css'
import Card from "../Card/Card";
import cn from "classnames"
import RateIcon from "./Rate.svg"
import { priceRu } from "@/helpers/helpers";


const HhCard = ({ count, juniorSalary, middleSalary, seniorSalary, ...props }: HhCardProps): JSX.Element => {
    
    const buildSalaryCard = (title: string, salary: number, rate: number): JSX.Element => {
        let rateArray = new Array(3).fill(<RateIcon />)
        return (
            <div className={style.salary}>
                <div className={style.hhCardTitle}>{title}</div>
                <div className={style.salaryValue}>{priceRu(salary)} ₽</div>
                <div className={style.rate}>
                    {rateArray.map((r, i) => (i < rate) ? <RateIcon key={i} className={style.filled} /> : <RateIcon key={i}/>)}
                </div>
            </div>
        )
    }

    return (
        <div className={style.hhBlock}>
            <Card>
                <div className={style.vacancy}>
                    <div className={style.hhCardTitle}>Всего вакансий</div>
                    <div className={style.vacancyCount}>{priceRu(count)}</div>
                </div>
            </Card>
            <Card>
                <div className={style.salaryBlock}>
                    {buildSalaryCard('Начинающий', juniorSalary, 1)}
                    {buildSalaryCard('Средний', middleSalary, 2)}
                    {buildSalaryCard('Профессионал', seniorSalary, 3)}
                </div>
            </Card>
        </div>
    )
}

export default HhCard