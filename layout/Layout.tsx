import React, { FunctionComponent, KeyboardEvent, useRef, useState } from "react";
import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import style from "./Layout.module.css"
import { AppContextProvider, IAppContext } from "@/context/AppContext";
import { Up } from "@/components/Up/Up";
import cn from "classnames";
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({
    subsets: ['latin'],
    display: 'swap'
})
const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false)
    const bodyRef = useRef<HTMLDivElement>(null)

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault()
            bodyRef.current?.focus()
            setIsVisible(false)
        }
        setIsVisible(false)
    }
    return (
        <div className={cn(style.wrapper, inter.className)}>
            <Header className={style.header} />
            <a
                tabIndex={1}
                onFocus={() => setIsVisible(true)}
                onKeyDown={(e: KeyboardEvent) => handleKeyDown(e)}
                className={cn(style.skipLink, { [style.visible]: isVisible })}
                href="#skipLink"
            >
                Перейти к содержанию
            </a>
            <Sidebar className={style.sidebar} />
            <main tabIndex={0} ref={bodyRef} className={style.body}>
                {children}
            </main>
            <Footer className={style.footer} />
            <Up />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function (props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}