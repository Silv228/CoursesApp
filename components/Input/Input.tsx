import React, { ForwardedRef, forwardRef } from "react";
import cn from 'classnames'
import style from './Input.module.css'
import { InputProps } from "./Input.props";

export const Input = forwardRef(({className, error, ...props} : InputProps, ref: ForwardedRef<HTMLInputElement>) : JSX.Element => {
    return (
        <input ref={ref} className={cn(className, style.input, {
            [style.error]: error
        })} {...props}/>
    )
})
Input.displayName = 'Input'