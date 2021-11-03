import React from "react";
import s from './CaruselEducationItem.module.scss';

const CaruselEducationItem = (props) => {

    return (

        <div className={s.sliderItem}>

          <div className={s.sliderItemImgWrap}>
                <div className={s.sliderItemImgBox}>
                    <img className={s.sliderItemImg} src={props.img} alt="logo" />
                </div>
          </div>
            <div className={s.sliderItemYearsBlock}>
                <p className={s.years}>{props.years}</p>
                <p className={s.institution}>{props.institution}</p>
            </div>
            <p className={s.sliderItemText}>{props.text}</p>
        </div>

    )
}

export default CaruselEducationItem;
