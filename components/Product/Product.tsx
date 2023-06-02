import React, { useState } from "react";
import cn from 'classnames'
import style from './Product.module.css'
import { ProductProps } from "./Product.props";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import { declination, priceRu } from "@/helpers/helpers";
import P from "../P/P";
import Image from "next/image";
import Reviews from "../Reviews/Reviews";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [isOpenedReview, setIsOpenedReview] = useState<boolean>(false)
    return (
        <div className={style.wrapper}>
            <Card className={cn(style.product)}>
                <Image
                    className={style.logo}
                    alt={product.characteristics[0].value}
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                    width={70}
                    height={70}
                />
                <div className={style.title}>{product.title}</div>
                <div className={style.price}>
                    {priceRu(product.price)} ₽
                    <Tag color="green" className={style.priceTag}>{priceRu(product.price - product.oldPrice)} ₽</Tag>
                </div>
                <div className={style.credit}>{priceRu(product.credit)} ₽<span>/мес</span></div>
                <Rating rating={product.reviewAvg ? product.reviewAvg : 0} className={style.rating} />
                <div className={style.titleTags}>{product.categories.map(c => <Tag className={style.titleTag} key={c} color="ghost">{c}</Tag>)}</div>
                <div className={style.priceLabel}>цена</div>
                <div className={style.creditLabel}>в кредит</div>
                <div className={style.ratingCount}>{product.reviewCount} {declination(product.reviewCount)}</div>
                <hr className={style.hr} />
                <P className={style.description}>{product.description}</P>
                <div className={style.features}>
                    {product.characteristics.map(ch => (
                        <div className={style.characteristic} key={ch.value}>
                            <div className={style.ChName}>{ch.name}</div>
                            <div className={style.divider}></div>
                            <div className={style.ChValue}>{ch.value}</div>
                        </div>
                    ))}
                    {product.tags.map((tag => <Tag key={tag} className={style.tag} color="ghost">{tag}</Tag>))}
                </div>
                <div className={style.advBlock}>
                    {product.advantages &&
                        <div className={style.advantages}>
                            <div className={style.advTitle}>Преимущества</div>
                            <div className={style.advText}>{product.advantages}</div>
                        </div>}
                    {product.disadvantages &&
                        <div className={style.disadvantages}>
                            <div className={style.advTitle}>Недостатки</div>
                            <div className={style.advText}>{product.disadvantages}</div>
                        </div>}
                </div>
                <hr className={cn(style.hr, style.hr1)} />
                <div className={style.buttons}>
                    <Button>Узнать подробнее</Button>
                    <Button onClick={() => setIsOpenedReview(!isOpenedReview)} appearance="ghost" arrow="right">Читать отзывы</Button>
                </div>
            </Card>
            <Reviews productId={product._id} reviews={product.reviews} className={cn(style.review, {
                [style.opened]: isOpenedReview,
                [style.closed]: !isOpenedReview
            })} />
        </div>
    )
}

export default Product