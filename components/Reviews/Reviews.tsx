import React, { ForwardedRef, forwardRef } from "react";
import cn from 'classnames'
import Card from "../Card/Card";
import { ReviewsProps } from "./Reviews.props"
import style from "./Reviews.module.css"
import UserIcon from "./user.svg"
import { format } from "date-fns";
import { ru } from "date-fns/locale"
import Rating from "../Rating/Rating";
import P from "../P/P";
import ReviewsForm from "../ReviewForm/ReviewsForm";

const Reviews = forwardRef(({productId, reviews, className, ...props }: ReviewsProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <Card ref={ref} color="blue" className={className}>
            {
                reviews.map(review => (
                     <div key={review._id} className={cn(style.review)}>
                        <UserIcon className={style.logo} />
                        <div className={style.title}>
                            <span>{review.name}</span>:&nbsp;
                            <span>{review.title}</span>
                        </div>
                        <div className={style.ratingBlock}>
                            <span className={style.date}>{format(new Date(review.updatedAt), "dd.MMMM.yyyy", { locale: ru })}</span>
                            <Rating rating={review.rating} />
                        </div>
                        <P className={style.description} size="s">{review.description}</P>
                        <div className={style.divider}><hr /></div>
                    </div>
                ))
            }
            <ReviewsForm productId={productId}/>
        </Card>
    )
})

export default Reviews