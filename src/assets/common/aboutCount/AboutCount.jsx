import React, { useRef, useEffect, useState } from "react";
import s from './AboutCount.module.scss';


const AboutCount = ({ skills, limit, isAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let countUp;
    if (isAnimation) {
        if (count < limit) {
            countUp = setInterval(() => {
                setCount(state => state + 1)
            }, 20)
        }
    }  else {
        setCount(0)
    }
    return () => {
        clearInterval(countUp)
    }
}, [count, isAnimation])

const experienceStyle = isAnimation ? `${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}` : s.bestBlockItemLine;
  
    return (
        <li className={s.bestBlockItem}>
            <div className={s.bestBlockItemContent}>
                <p className={s.bestBlockItemText}>{skills}</p>
                <p className={s.bestBlockItemNum}>{`${count}%`}</p>
            </div>
            <div className={s.bestBlockItemContentBorder}></div>
            <div className={experienceStyle} style={{ width: `${count}%` }} />
        </li>
    )
}

export default AboutCount;