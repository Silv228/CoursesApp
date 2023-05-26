import React from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg"
import style from "./Sidebar.module.css"
import cn from "classnames"
import Search from "@/components/Search/Search";

const Sidebar = ({className, ...props }: SidebarProps) => {
    return (
        <div className={cn(className, style.sidebar)} {...props}>
            <Logo className={style.logo}/>
            <Search/>
            <Menu />
        </div>
    )
}

export default Sidebar