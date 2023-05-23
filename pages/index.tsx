import React, { useState } from "react"
import Button from "../components/Button/Button"
import P from "../components/P/P"
import Tag from "../components/Tag/Tag"
import Rating from "../components/Rating/Rating"
import { withLayout } from "@/layout/Layout"
import { GetStaticProps } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"

function Home({ menu }: HomeProps): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [rating, setRating] = useState<number>(3)
  return (
    <>
      <Button appearance='primary' arrow="right" onClick={() => setCount(count + 1)}>Hello</Button>
      <Button appearance='ghost' arrow="down">Hello</Button>
      <P size="s">hello</P>
      <P size="m">hello</P>
      <P>{count}</P>
      <P size="l">hello</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="s" color='green'>green</Tag>
      <Tag size="s" color='red'>red</Tag>
      <Tag size="s" color='primary'>primary</Tag>
      <Tag size="s" color='grey'>grey</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <Rating isEditable={false} rating={2} />
    </>
  )
}

export default withLayout(Home)


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

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}