import React, { useContext } from "react"
import { withLayout } from "@/layout/Layout"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
import { TopLevelCategory } from "@/interfaces/page.interface"
import { ParsedUrlQuery } from "querystring"
import { firstLevelMenu } from "@/helpers/helpers"
import { AppContext } from "@/context/AppContext"
import { APIobj } from "../../helpers/api"

function Type({menu, firstCategory}: TypeProps): JSX.Element {
    const { setMenu } = useContext(AppContext)
    setMenu && setMenu(menu)
    return (
        <>
            <div>
                Type: {firstCategory}
            </div>
        </>
    )
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    const firstCategory = firstLevelMenu.find(m => m.route === params.type);
    if (!firstCategory) {
        return {
            notFound: true
        }
    }
    const { data: menu } = await axios.post<MenuItem[]>(APIobj.topPage.find,   { firstCategory: firstCategory.id })

    return ({
        props: {
            menu,
            firstCategory: firstCategory.id
        }
    })
}

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
}