import React from "react";
import cn from 'classnames'
import style from './Textarea.module.css'
import { TextareaProps } from "./Textarea.props";

const Textarea = ({className, ...props} : TextareaProps) : JSX.Element => {
    return (
        <textarea className={cn(className, style.input)} {...props}/>
    )
}

export default Textarea