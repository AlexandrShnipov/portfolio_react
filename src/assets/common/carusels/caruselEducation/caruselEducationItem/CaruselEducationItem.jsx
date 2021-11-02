import React from "react";
import s from './CaruselEducationItem.module.scss';

const CaruselEducationItem = (props) => {

    return (
        <div className={s.sliderItem}>
        <div className={s.sliderItemImgBox}>
            <img className={s.sliderItemImg} src={props.img} alt="logo" />
        </div>
        <div className={s.sliderItemYearsBlock}>
            <p className={s.years}>{props.years}</p>
            <p className={s.title}>{props.title}</p>
        </div>
        <p className={s.sliderItemText}>{props.text}</p>
    </div>

    )
}

export default CaruselEducationItem;
 