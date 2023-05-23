import { AppContext } from "@/context/AppContext";
import { MenuItem, MenuItemSidebar, PageItem } from "@/interfaces/menu.interface";
import React, { useContext } from "react";
import CourseIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from "classnames"
import style from "./Menu.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext)
    const router = useRouter()

    const openSecondLevel = (secondLevel: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondLevel) {
                m.isOpened = !m.isOpened
            }
            return m
        }))
    }

    const firstLevelMenu: MenuItemSidebar[] = [
        { name: 'Курсы', route: 'courses', icon: <CourseIcon />, id: TopLevelCategory.Courses },
        { name: 'Сервисы', route: 'services', icon: <ServicesIcon />, id: TopLevelCategory.Services },
        { name: 'Книги', route: 'books', icon: <BooksIcon />, id: TopLevelCategory.Books },
        { name: 'Товары', route: 'products', icon: <ProductsIcon />, id: TopLevelCategory.Products },
    ]
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
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.query.alias as string)) {
                        m.isOpened = true
                    }
                    return (
                        <div className={style.secondLevel} key={m._id.secondCategory}>
                            <div className={style.secondLevelName} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(style.secondLevelBlock, {
                                [style.secondLevelOpened]: m.isOpened
                            })} >{BuildThirdLevel(m.pages, route)}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
    const BuildThirdLevel = (page: PageItem[], route: string) => {
        return (
            page.map(p => (
                <Link key={p.category} href={`/${route}/${p.alias}`} className={cn(style.thirdLevel, {
                    [style.thirdLevelActive]: p.alias === router.query.alias
                })}>
                    {p.category}
                </Link>
            ))

        )
    }
    return (
        <div className={style.menu}>
            {BuildFirstLevel()}
        </div>
    )
}