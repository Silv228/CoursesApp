import React from "react";
import { HeaderProps } from "./Header.props";


const Header = ({...props}:HeaderProps) => {
    return (
        <div {...props}>
            Header
        </div>
    )
}

export default Header