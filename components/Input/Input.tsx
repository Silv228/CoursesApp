import React, { ForwardedRef, forwardRef } from "react";
import cn from 'classnames'
import style from './Input.module.css'
import { InputProps } from "./Input.props";

const Input = forwardRef(({className, error, ...props} : InputProps, ref: ForwardedRef<HTMLInputElement>) : JSX.Element => {
    console.log(error)
    return (
        <input ref={ref} className={cn(className, style.input, {
            [style.error]: error
        })} {...props}/>
    )
})

export default Input