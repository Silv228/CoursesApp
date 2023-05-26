import React from "react"
import { withLayout } from "@/layout/Layout"
import { GetStaticProps } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
import Htag from "@/components/Htag/Htag"

function Search(): JSX.Element {
  return (
    <>
      <Htag tag={"h1"}>Search</Htag>
    </>
  )
}

export default withLayout(Search)


export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory })

  return ({
    props: {
      menu,
      firstCategory
    }
  })
}