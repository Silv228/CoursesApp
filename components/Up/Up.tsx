import React, { useEffect } from "react";
import cn from 'classnames'
import style from './Up.module.css'
import { motion, useAnimationControls } from "framer-motion";
import { useScrollY } from "@/hooks/useScrollY";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {

    const controls = useAnimationControls()
    const y = useScrollY()
    useEffect(() => {
        controls.start({
            opacity: y * 1.5 / document.body.scrollHeight
        })
    }, [y])

    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <motion.div
            animate={controls}
            initial={{ opacity: 0 }}
            className={cn(style.up)}
        >
            <ButtonIcon onClick={scrollToTop} appearance="primary" icon="up" />
        </motion.div>
    )
}
