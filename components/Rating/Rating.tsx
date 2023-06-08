import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";
import { RatingProps } from "./Rating.props";
import RatingStar from "./starRating.svg"
import style from "./Rating.module.css"
import cn from "classnames"

const Rating = forwardRef(({ isEditable = false, setRating, rating, tabIndex, className, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [currentRating, setCurrentRating] = useState<number>(rating)
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])
    useEffect(() => {
        setCurrentRating(rating)
    }, [rating, tabIndex])

    const ratingArray: JSX.Element[] = new Array(5).fill(<></>)
    const changeRatingClick = (rating: number) => {
        if (!setRating || !isEditable) {
            return
        }
        setRating(rating)
    }
    const changeRatingKey = (e: KeyboardEvent, i: number) => {
        if (!setRating) {
            return
        }
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault()
            setRating(i)
        }
        else{setCurrentRating(rating)}
        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
            e.preventDefault()
            if (!i) {
                setRating(1)
            }
            else {
                setCurrentRating(i < 5 ? i + 1 : rating)
            }
            ratingArrayRef.current[i]?.focus()
        }
        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
            e.preventDefault()
            setCurrentRating(i > 1 ? i - 1 : rating)
            ratingArrayRef.current[i - 2]?.focus()
        }
        
    }
    const constructRating = () =>
        ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    onMouseEnter={() => isEditable && setCurrentRating(i + 1)}
                    key={i}
                    ref={r => ratingArrayRef.current.push(r)}
                    onClick={() => isEditable && changeRatingClick(i + 1)}
                    tabIndex={ isEditable ? tabIndex ?? 0 : -1}
                    onKeyDown={(e: KeyboardEvent) => changeRatingKey(e, i + 1)}
                    className={style.starWraper}
                >
                    <RatingStar
                        className={cn(style.star, {
                            [style.filled]: i < currentRating
                        })} />
                </span>
            )
        })

    return (
        <div ref={ref} className={cn(className, style.ratingBlock, {
            [style.ratingBlockActive]: isEditable
        })} onMouseLeave={() => setCurrentRating(rating)}>
            {constructRating()}
        </div>
    )
})

export default Rating