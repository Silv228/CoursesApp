import React from "react";
import { Tag } from "./Tag.props";
import cn from 'classnames'
import style from './Tag.module.css'

const Tag = ({ size = 's', color = 'ghost', href, children, ...props }: Tag): JSX.Element => {
    return (
        <div 
        className={cn(style.tag, {
            [style.small] : size === 's',
            [style.large] : size === 'l',
            [style.red] : color === 'red',
            [style.green] : color === 'green',
            [style.grey] : color === 'grey',
            [style.ghost] : color === 'ghost',
            [style.primary] : color === 'primary',
        })} {...props}
        >
            {href ?
                <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    )
}

export default Tag
