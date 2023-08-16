import React from "react"
import { withLayout } from "@/layout/Layout"
import { GetStaticProps } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
import { APIobj } from "@/helpers/api"

function Home(): JSX.Element {
  return (
    <>
    </>
  )
}

export default withLayout(Home)
export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(APIobj.topPage.find, { firstCategory })

  return ({
    props: {
      menu,
      firstCategory
    }
  })
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}