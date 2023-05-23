import React from "react";
import { FooterProps } from "./Footer.props";
import style from "./Footer.module.css"
import cn from "classnames"
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <div {...props} className={cn(className, style.footer)}>
            <div className={style.copyright}>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#PS">Пользовательское соглашение</a>
            <a href="#PC">Политика конфиденциальности</a>
        </div>
    )
}

export default Footer