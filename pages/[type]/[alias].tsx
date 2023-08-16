import React from "react"
import { withLayout } from "@/layout/Layout"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, Metadata } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
import { PageModel, TopLevelCategory } from "@/interfaces/page.interface"
import { ParsedUrlQuery } from "querystring"
import { ProductItem } from "@/interfaces/product.interface"
import { firstLevelMenu } from "@/helpers/helpers"
import TopPageComponent from "@/page-components/TopPageComponent/TopPageComponent"
import { APIobj } from "../../helpers/api"
import Head from "next/head"
function TopPage({ page, products, firstCategory }: TopPageProps): JSX.Element {
    return (
        <>
            <Head>
                {page ? <>
                    <title>{page.metaTitle}</title>
                    <meta name="description" content={page.metaDescription} />
                    <meta property="og:title" content={page.metaTitle} />
                    <meta property="og:description" content={page.metaDescription} />
                </>
                    : <></>}
            </Head>
            <TopPageComponent page={page} products={products} firstCategory={firstCategory} />
        </>

    )
}

export default withLayout(TopPage)

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = []
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(APIobj.topPage.find, { firstCategory: m.id })
        paths = paths.concat(menu.flatMap(s => s.pages.map(em => `/${m.route}/${em.alias}`)))
    }
    return {
        paths,
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
    const { data: menu } = await axios.post<MenuItem[]>(APIobj.topPage.find, { firstCategory: firstCategory.id })
    try {
        const { data: page } = await axios.get<PageModel>(APIobj.topPage.byAlias + params.alias)
        const { data: products } = await axios.post<ProductItem[]>(APIobj.product.find,
            {
                category: page.category,
                limit: 10,
            }
        )

        return ({
            props: {
                menu,
                firstCategory: firstCategory.id,
                page,
                products
            }
        })
    }
    catch {
        return {
            notFound: true
        }
    }
}

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: PageModel;
    products: ProductItem[];
}