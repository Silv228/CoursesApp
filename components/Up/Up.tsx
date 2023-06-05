import React from "react";
import cn from 'classnames'
import style from './Up.module.css'
import UpIcon from "./upArrow.svg"
import { UpProps } from "./Up.props";

const Up = ({className, ...props }: UpProps): JSX.Element => {
    return (
        <button className={cn(className, style.up)} {...props}>
            <UpIcon />
        </button>
    )
}

export default Up