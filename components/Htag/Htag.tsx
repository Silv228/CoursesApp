import React from "react";
import { Htag } from "./Htag.props";
import style from './Htag.module.css'

const Htag = ({ tag, children, ...props }: Htag): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={style.h1} {...props}>{children}</h1>
        case 'h2':
            return <h2 className={style.h2} {...props}>{children}</h2>
        case 'h3':
            return <h3 className={style.h3} {...props}>{children}</h3>
    }
}

export default Htag