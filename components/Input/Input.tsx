import React from "react";
import cn from 'classnames'
import style from './Input.module.css'
import { InputProps } from "./Input.props";

const Input = ({className, ...props} : InputProps) : JSX.Element => {
    return (
        <input className={cn(className, style.input)} {...props}/>
    )
}

export default Input