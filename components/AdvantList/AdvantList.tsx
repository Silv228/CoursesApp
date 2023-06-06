import React from "react";
import cn from 'classnames'
import style from './AdvantList.module.css'
import { AdvantListProps } from "./AdvantList.props";
import TickIcon from "./tick.svg";
import Htag from "../Htag/Htag";
import P from "../P/P";

const AdvantList = ({ advantages, ...props }: AdvantListProps): JSX.Element => {
    return (
        <div className={style.wrapper} {...props}>
            <Htag tag="h2">Преимущества</Htag>
            {advantages.map((advant) => {
                return (
                    <div key={advant._id} className={style.advantages} >
                        <TickIcon />
                        <Htag tag="h3" className={style.advantagesTitle}>{advant.title}</Htag>
                        <hr className={style.vline} />
                        <P size="l" >{advant.description}</P>
                    </div>
                )
            })}
        </div>
    )
}

export default AdvantList