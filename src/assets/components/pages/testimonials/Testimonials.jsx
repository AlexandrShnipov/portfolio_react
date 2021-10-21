import React from "react";
import s from './Testimonials.module.scss';

const Testimonials = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.sectionTitleBox}>
                            <svg className={s.sectionTitleBoxSvgImg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 75"><defs></defs><path fill="currentColor" d="M25 0C16.9271 0 10.7422 2.14844 6.44531 6.44531 2.14844 10.7422 0 16.9271 0 25v50h31.25V25H12.5c0-4.4271.9766-7.6172 2.9297-9.5703C17.3828 13.4766 20.5729 12.5 25 12.5V0zm43.75 0c-8.0729 0-14.2578 2.14844-18.5547 6.44531C45.8984 10.7422 43.75 16.9271 43.75 25v50H75V25H56.25c0-4.4271.9766-7.6172 2.9297-9.5703C61.1328 13.4766 64.3229 12.5 68.75 12.5V0z"></path></svg>
                            <h3 className={s.sectionTitleBoxTitle}>
                                Creative & dedicated is things that gilber studio brings for your business.
                            </h3>
                        </div>
                        <div className={s.slider}>
                            <div className={s.sliderItems}>
                                <div className={s.sliderItem}>
                                    <p className={s.sliderItemText}>"Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let."</p>
                                    <p className={s.sliderItemName}>Ramsay Bolton</p>
                                    <p className={s.sliderItemCompany}>Apple Inc</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;