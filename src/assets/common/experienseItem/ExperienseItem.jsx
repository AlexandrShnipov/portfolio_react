import React from "react";
import s from './ExperienseItem.module.scss';

const ExperienseItem = (props) => {

    return (

        <div className={s.sectionItem}>
            <p className={s.function}>
                {props.function}
            </p>
            <p className={s.institution}>
                {props.institution}
            </p>
            <p className={s.years}>
                {props.years}
            </p>
        </div>
    )
}

export default ExperienseItem;