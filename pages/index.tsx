import React, { useState } from "react"
import Button from "../components/Button/Button"
import P from "../components/P/P"
import Tag from "../components/Tag/Tag"
import Rating from "../components/Rating/Rating"
import { withLayout } from "@/layout/Layout"
import { GetStaticProps } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
import Htag from "@/components/Htag/Htag"
import Input from "@/components/Input/Input"
import Textarea from "@/components/Textarea/Textarea"
import { API } from "@/helpers/API"

function Home({ menu,  }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3)
  return (
    <>
      <Htag tag={"h1"}>Курсы по {}</Htag>
      <Input placeholder="test"/>
      <Textarea placeholder="test area"/>
    </>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory })

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