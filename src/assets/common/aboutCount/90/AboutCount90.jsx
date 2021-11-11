import React, { useRef, useEffect, useState } from "react";
import s from './AboutCount90.module.scss';


const AboutCount90 = (props) => {
    const [animation, setAnimation] = useState(false);
    const [count90, setCount] = useState(0);
    const experienceRef = useRef();
    console.log(count90)
    const handleCount = () => {
        setCount(state => state + 1)
    }

    const windowHeignt = window.innerHeight;
    let countUp = setInterval(() => {
        //    handleCount()
    }, 3)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        if (animation) {
            if (count90 < 90) {
                countUp = setInterval(() => {
                    setCount(state => state + 1)
                }, 10)
            }
        }
        return () => {
            clearInterval(countUp)
        }
    }, [count90, animation])

    const handleScroll = () => {
        console.log(experienceRef.current.getBoundingClientRect())
        console.log(windowHeignt);
        const rect = experienceRef.current.getBoundingClientRect();
        const topEdge = rect.top > -rect.height && rect.top < windowHeignt;
        if (topEdge) {
            setAnimation(() => true)
        } else {
            setAnimation(() => false)
            setCount(0)
        }
    }
    const experienceStyle = animation ? `${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}` : s.bestBlockItemLine;

    return (
        <li className={s.bestBlockItem} ref={experienceRef}>
            <div className={s.bestBlockItemContent}>
                <p className={s.bestBlockItemText}>{props.skils}</p>
                <p className={s.bestBlockItemNum}>{`${count90}%`}</p>
            </div>
            <div className={s.bestBlockItemContentBorder}></div>
            <div className={experienceStyle} style={{ width: "90%" }}></div>
        </li>
    )
}

export default AboutCount90;