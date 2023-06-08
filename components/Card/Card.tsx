import React, { ForwardedRef, forwardRef } from "react";
import { CardProps } from "./Card.props";
import style from './Card.module.css'
import cn from "classnames"

const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div ref={ref} className={cn(className, style.card, {
            [style.blueCard]: color === "blue"
        })} {...props}>
            {children}
        </div>
    )
})

export default Card