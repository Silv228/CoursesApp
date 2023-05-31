import React, { ForwardedRef, forwardRef } from "react";
import cn from 'classnames'
import style from './Textarea.module.css'
import { TextareaProps } from "./Textarea.props";

const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea className={cn(className, style.input, {
            [style.error]: error
        })} ref={ref} {...props} />
    )
})

export default Textarea