import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import style from "./Layout.module.css"
import { AppContextProvider, IAppContext } from "@/context/AppContext";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header} />
            <Sidebar className={style.sidebar} />
            <div className={style.body}>
                {children}
            </div>
            <Footer className={style.footer} />
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