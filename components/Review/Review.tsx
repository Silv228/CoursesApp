import React from "react";
import cn from 'classnames'
import { ReviewProps } from "./Review.props"
import style from "./Review.module.css"
import UserIcon from "./user.svg"
import { format } from "date-fns";
import { ru } from "date-fns/locale"
import { Rating } from "../Rating/Rating";
import P from "../P/P";

const Review = ({ _id, name, updatedAt, rating, description, title }: ReviewProps): JSX.Element => {
    return (
        <div
            key={_id}
            className={cn(style.review)}
        >
            <UserIcon className={style.logo} />
            <div className={style.title}>
                <span>{name}</span>:&nbsp;
                <span>{title}</span>
            </div>
            <div className={style.ratingBlock}>
                <span className={style.date}>{format(new Date(updatedAt), "dd.MMMM.yyyy", { locale: ru })}</span>
                <Rating rating={rating} />
            </div>
            <P className={style.description} size="s">{description}</P>
            <div className={style.divider}><hr /></div>
        </div>
    )
}

export default Review