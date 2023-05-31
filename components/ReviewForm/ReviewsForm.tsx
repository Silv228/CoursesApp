import React, { useState } from "react";
import cn from 'classnames'
import { ReviewsFormProps } from "./ReviewsForm.props"
import style from "./ReviewsForm.module.css"
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import { Controller, useForm } from "react-hook-form";
import CloseIcon from "./close.svg"

const ReviewsForm = ({ className, ...props }: ReviewsFormProps): JSX.Element => {
    interface IFormData {
        name: string;
        title: string;
        description: string;
        rating: number;
    }
    const { register, handleSubmit, formState: { errors }, control } = useForm<IFormData>({ mode: 'onSubmit' })
    const onSubmit = (data: IFormData): void => {
        console.log(data)
    }
    const [isDisplaySubmitField, setIsDisplaySubmitField] = useState<boolean>(true)
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={cn(className, style.reviewForm)}>
                <div className={cn(style.name, style.formField)}>
                    <Input error={errors.name} {...register('name', {
                        required: {
                            value: true,
                            message: 'Введите имя'
                        }
                    })} placeholder="Имя" />
                    <span className={style.errorMessage}>{errors.name && errors.name.message}</span>
                </div>
                <div className={cn(style.title, style.formField)}>
                    <Input error={errors.title} {...register('title', {
                        required: {
                            value: true,
                            message: 'Введите заголовок отзыва'
                        }
                    })} placeholder="Загаловок отзыва" />
                    <span className={style.errorMessage}>{errors.title && errors.title.message}</span>
                </div>
                <div className={cn(style.rate, style.formField)}>Оценка:
                    < Controller
                        render={({ field }) => <Rating {...field} isEditable={true} rating={field.value} ref={field.ref} setRating={field.onChange} />}
                        name="rating"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Оцените курс'
                            }
                        }}
                    />
                    <span className={style.errorMessage}>{errors.rating && errors.rating.message}</span>
                </div>
                <div className={cn(style.description, style.formField)}>
                    <Textarea error={errors.name} {...register('description', {
                        required: {
                            value: true,
                            message: 'Введите текст отзыва'
                        }
                    })} placeholder="Текст отзыва" />
                    <span className={style.errorMessage}>{errors.description && errors.description.message}</span>
                </div>
                <div className={style.submit}>
                    <Button className={style.submitButton}>Отправить</Button>
                    <span className={style.submitLabel}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </form>
            <div className={cn(style.submitField, {
                [style.hide]: !isDisplaySubmitField
            })}>
            <span className={style.submitMessage}>Ваш отзыв отправлен, и будет опубликован после проверки</span>
            <CloseIcon onClick={() => setIsDisplaySubmitField(false)} className={cn(style.close)} />
        </div >
        </>
    )

}

export default ReviewsForm