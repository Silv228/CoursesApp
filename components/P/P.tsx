import React from "react";
import cn from 'classnames'
import style from './P.module.css'
import { P } from "./P.props";

const P = ({size = 'm', children, className, ...props} : P) : JSX.Element => {
    return (
        <p className={cn(style.p, className, {
            [style.ps] : size === 's',
            [style.pm] : size === 'm',
            [style.pl] : size === 'l',
        })} {...props} 
        >{children}</p>
    )
}

export default P