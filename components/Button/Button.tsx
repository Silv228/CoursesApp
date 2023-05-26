import React from "react";
import cn from 'classnames'
import style from './Button.module.css'
import { Button } from "./Button.props";
import ArrowIcon from './arrow.svg'

const Button = ({ appearance = 'primary', arrow = 'none', children, className, ...props }: Button): JSX.Element => {
    return (
        <button className={cn(style.button, className,  {
            [style.primary]: appearance === 'primary',
            [style.ghost]: appearance === 'ghost'
        })} {...props} >
            {children}
            {arrow !== 'none' && <ArrowIcon className={cn(style.arrow, {
                [style.arrowRight]: arrow === 'right',
                [style.arrowDown]: arrow === 'down',
            })} />}
        </button>
    )
}

export default Button