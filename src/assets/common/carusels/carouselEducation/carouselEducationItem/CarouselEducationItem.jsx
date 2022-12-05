import React from "react";
import s from './CarouselEducationItem.module.scss';

const CarouselEducationItem = (props) => {

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
            <p className={s.sliderItemText}>{props.text}
            <span className={s.sliderItemLink}> {props.link && props.link} </span>
            </p>
           
        </div>

    )
}

export default CarouselEducationItem;
