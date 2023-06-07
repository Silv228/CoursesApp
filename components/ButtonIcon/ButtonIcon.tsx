import React from "react";
import cn from 'classnames'
import style from './ButtonIcon.module.css'
import { ButtonIconProps, icons } from "./ButtonIcon.props";

const ButtonIcon = ({icon, appearance, className, ...props} : ButtonIconProps) : JSX.Element => {
    const ButtonIcon = icons[icon]
    return (
        <button className={cn(style.button, className, {
            [style.primary]: appearance === 'primary',
            [style.white]: appearance === 'white'
        })} {...props}>
            <ButtonIcon />
        </button>
    )
}

export default ButtonIcon