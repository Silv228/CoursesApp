import React from "react";
import { Htag } from "./Htag.props";
import style from './Htag.module.css'
import cn from "classnames"

const Htag = ({ tag, children, ...props }: Htag): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={cn(style.h1, props.className)} >{children}</h1>
        case 'h2':
            return <h2 className={cn(style.h2, props.className)} >{children}</h2>
        case 'h3':
            return <h3 className={cn(style.h3, props.className)} >{children}</h3>
    }
}

export default Htag