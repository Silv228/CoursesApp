import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import RatingStar from "./starRating.svg"
import style from "./Rating.module.css"
import cn from "classnames"

const Rating = ({ isEditable, setRating, rating, ...props }: RatingProps) => {
    const [currentRating, setCurrentRating] = useState<number>(rating)
    useEffect(() => {
        setCurrentRating(rating)
    }, [rating])
    const ratingArray: JSX.Element[] = new Array(5).fill(<></>)
    const changeRatingClick = (rating: number) => {
        if (!setRating || !isEditable) {
            return
        }
        setRating(rating)
    }
    const changeRatingKey = (key: string, rating: number) => {
        if (!setRating || key !== 'Space') {
            return
        }
        setRating(rating)
    }
    const constructRating = () =>
        ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span onMouseEnter={() => isEditable && setCurrentRating(i + 1)} key={i}>
                    <RatingStar
                        onClick={() => isEditable && changeRatingClick(i + 1)}
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => changeRatingKey(e.code, i + 1)}
                        className={cn(style.star, {
                            [style.filled]: i < currentRating
                        })} />
                </span>
            )
        })

    return (
        <div onMouseLeave={() => setCurrentRating(rating)}>
            {constructRating()}
        </div>
    )
}

export default Rating