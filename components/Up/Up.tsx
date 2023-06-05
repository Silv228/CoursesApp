import React, { useEffect } from "react";
import cn from 'classnames'
import style from './Up.module.css'
import UpIcon from "./upArrow.svg"
import { motion, useAnimationControls } from "framer-motion";
import { useScrollY } from "@/hooks/useScrollY";

const Up = (): JSX.Element => {

    const controls = useAnimationControls()
    const y = useScrollY()
    useEffect(() => {
        controls.start({
            opacity: y / document.body.scrollHeight
        })
    }, [y])

    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <motion.button
            animate={controls}
            initial={{ opacity: 0 }}
            onClick={scrollToTop}
            className={cn(style.up)}
        >
            <UpIcon />
        </motion.button>
    )
}

export default Up