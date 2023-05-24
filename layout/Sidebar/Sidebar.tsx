import React from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg"
import style from "./Sidebar.module.css"
import cn from "classnames"

const Sidebar = ({ ...props }: SidebarProps) => {
    return (
        <div {...props} className={cn(props.className, style.sidebar)}>
            <Logo className={style.logo}/>
            <div>Search</div>
            <Menu />
        </div>
    )
}

export default Sidebar