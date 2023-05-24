import React from "react";
import { CardProps } from "./Card.props";
import style from './Card.module.css'
import cn from "classnames"

const Card = ({ color = 'white', children, ...props }: CardProps): JSX.Element => {
    return (
        <div {...props} className={cn(style.card, {
            [style.blueCard]: color === 'blue'
        })}>
            {children}
        </div>
    )
}

export default Card