import React from "react";
import s from './Contact.module.scss';
import contact from '../../../images/background/contact.jpg';


const Contact = () => {

    return (
        <section className={s.section}>
                <div className={s.sectionBgBox}>
                <img className={s.sectionBgImg} src={contact} alt="images background" data-aos="zoom-out" data-aos-duration="3000" data-aos-delay="100" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.addressBlock}>
                            <h3 className={s.addressBlockTitle}> Contact</h3>
                            <p className={s.addressBlockText}>You'll called for yielding male, so lights Stars abundantly, is their.</p>
                            <p className={s.address}>Vitebsk, Belarus</p>
                            <a className={s.tel} type="tel" href="tel:+375297179741">+375 (29) 717-97-41</a>
                            <a className={s.email} href="mailto:SShnipov@gmail.com">SShnipov@gmail.com</a>
                        </div>
                        <div className={s.formBlock}>
                            <h4 className={s.formBlockText}>Let's grab a coffee and jump on conversation <span className={s.textColor}>chat with me.</span> </h4>
                           <form className={s.form} action="/">
                               <input className={`${s.inputName} ${s.formItem}`} type="text" placeholder="Your Name" title="Please enter your name" required/>
                               <input className={`${s.inputEmail} ${s.formItem}`} type="email" placeholder="Your Email" title="Please enter email" required/>
                               <textarea className={`${s.textarea} ${s.formItem}`} name="text" placeholder="Message" required/>
                               <button className={s.formButton} type="submit">Contact me</button>
                           </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;