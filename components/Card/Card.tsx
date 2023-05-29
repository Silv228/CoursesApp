import React from "react";
import { CardProps } from "./Card.props";
import style from './Card.module.css'
import cn from "classnames"

const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
    return (
        <div className={cn(className, style.card, {
            [style.blueCard]: color === "blue"
        })} {...props} >
            {children}
        </div>
    )
}

export default Card