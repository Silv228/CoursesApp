import React from "react";
import cn from 'classnames'
import { ReviewsFormProps } from "./ReviewsForm.props"
import style from "./ReviewsForm.module.css"
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const ReviewsForm = ({ className, ...props }: ReviewsFormProps): JSX.Element => {
    return (
        <div className={cn(className, style.reviewForm)}>
            <Input className={style.name} placeholder="Имя" />
            <Input className={style.title} placeholder="Загаловок отзыва" />
            <div className={style.rate}>Оценка: <Rating rating={0} /></div>
            <Textarea className={style.description} placeholder="Текст отзыва" />
            <div className={style.submit}>
                <Button className={style.submitButton}>Отправить</Button>
                <span className={style.submitLabel}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
    )
}

export default ReviewsForm