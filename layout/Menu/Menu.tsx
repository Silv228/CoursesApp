import { AppContext } from "@/context/AppContext";
import { PageItem } from "@/interfaces/menu.interface";
import React, { useContext, KeyboardEvent } from "react";
import { firstLevelMenu } from "@/helpers/helpers";
import cn from "classnames"
import style from "./Menu.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext)
    const router = useRouter()

    const handleKey = (e: KeyboardEvent<HTMLDivElement>, category: string) => {
        if (e.code === "Space" || e.code === "Enter"){
            e.preventDefault()
            openSecondLevel(category)
        }
    } 

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0,
        }
    }
    const variantsChildren = {
        visible: {
            height: 29,
            opacity: 1
        },
        hidden: {
            overflow: 'hidden',
            height: 0,
            opacity: 0
        }
    }
    const openSecondLevel = (secondLevel: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondLevel) {
                m.isOpened = !m.isOpened
            }
            return m
        }))
    }


    const BuildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <Link href={`/${menu.route}`}>
                            <div className={cn(style.firstLevelMenuItem, {
                                [style.firstLevelMenuItemActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                        {menu.id === firstCategory && BuildSecondLevel(menu.route)}
                    </div>
                ))}
            </>
        )
    }
    const BuildSecondLevel = (route: string): JSX.Element => {
        return (
            <div>
                {menu && menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.query.alias as string)) {
                        m.isOpened = true
                    }
                    return (
                        <motion.div
                            layout
                            variants={variants}
                            initial={m.isOpened ? 'visible' : 'hidden'}
                            animate={m.isOpened ? 'visible' : 'hidden'}
                            className={style.secondLevel}
                            key={m._id.secondCategory}
                        >
                            <div
                                tabIndex={0}
                                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleKey(e, m._id.secondCategory)}
                                className={style.secondLevelName}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(style.secondLevelBlock)} >{BuildThirdLevel(m.pages, route, m.isOpened ?? false)}</div>
                        </motion.div>
                    )
                })
                }

            </div >
        )
    }
    const BuildThirdLevel = (page: PageItem[], route: string, isOpened: boolean) => {
        return (
            page.map(p => (
                <motion.div
                    variants={variantsChildren}
                    key={p.category}
                >
                    <Link tabIndex={isOpened ? 0 : -1} href={`/${route}/${p.alias}`} className={cn(style.thirdLevel, {
                        [style.thirdLevelActive]: p.alias === router.query.alias
                    })}>
                        {p.category}
                    </Link>
                </motion.div>
            ))

        )
    }
    return (
        <nav role="navigation" className={style.menu}>
            {BuildFirstLevel()}
        </nav>
    )
}