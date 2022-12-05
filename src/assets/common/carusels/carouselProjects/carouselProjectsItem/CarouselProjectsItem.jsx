import React from "react";
import s from './CarouselProjectsItem.module.scss'
import LinkColor from '../../../linkColor/LinkColor'

const CarouselProjectsItem = (props) => {

    return (
        <div className={s.sliderItem}>
            <div className={s.imgBox}>
                <div className={s.imgBoxSquare}>
                    <img className={s.imgBoxImg} src={props.img} alt="images project" />
                    <div className={s.imgBoxLinks}>

                        {props.children}

                    </div>
                </div>
            </div>
            <div className={s.sliderItemContent}>
                <h3 className={s.sliderItemContentTitle}>
                    {props.title}
                </h3>
                <div className={s.sliderItemContentText}>
                    <p className={s.sliderItemContentStack}>
                        Stack:
                    </p>
                    <span>{props.stack}</span>
                </div>
              <div className={s.sliderItemContentText}>
                  <p className={s.sliderItemContentStack}>
                    {props.logInToTheSystem}
                    </p>
                    <span>{props.email}</span>
              </div>
            </div>
            
        </div>

    )
}

export default CarouselProjectsItem;