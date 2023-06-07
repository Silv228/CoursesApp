import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import Sidebar from "../Sidebar/Sidebar";
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import style from "./Header.module.css"
import Logo from "../logo.svg"
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Header = ({ ...props }: HeaderProps) => {
    const [isOpened, setIsOpened] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setIsOpened(false)
    },[router])
    const variants = {
        hidden: {
            display: "none",
            left: "100%"
        },
        visible: {
            display: "block",
            left: 0,
            right: 0,
            transition: {
                type: "spring",
                stiffness: 50
            }
        }
    }
    return (
        <header className={style.wrapper} {...props}>
            <div className={style.header}>
                <Logo />
                <ButtonIcon appearance="white" icon="menu" onClick={() => setIsOpened(true)} />
            </div>
            <motion.div
                variants={variants}
                initial={'hidden'}
                animate={isOpened ? 'visible' : 'hidden'}
                className={style.sidebar}
            >
                <Sidebar />
                <ButtonIcon className={style.close} appearance="white" icon="close" onClick={() => setIsOpened(false)} />
            </motion.div>
        </header>
    )
}

export default Header