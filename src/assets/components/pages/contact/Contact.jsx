import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers as FormikActions } from 'formik';
import { useState } from "react";
import s from './Contact.module.scss';
import contact from '../../../images/background/contact.jpg';
import axios from 'axios';


const Contact = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div className={s.section} id="Contact">
            <div className={s.sectionBgBox}>
                <img className={s.sectionBgImg} src={contact} alt="images background"
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    data-aos-delay="100" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.addressBlock}
                            data-aos="fade-up"
                            data-aos-delay="100">
                            <h3 className={s.addressBlockTitle}> Contact</h3>
                            <p className={s.address}>Vitebsk, Belarus</p>
                            <a className={s.tel} type="tel" href="tel:+375297179741">+375 (29) 717-97-41</a>
                            <a className={s.email} href="mailto:SShnipov@gmail.com">SShnipov@gmail.com</a>
                        </div>
                        <div className={s.formBlock}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="100">
                            <h4 className={s.formBlockText}>Let's grab a coffee and jump on conversation&nbsp;
                                <a className={s.formBlockTextLink} href="mailto:SShnipov@gmail.com">
                                    chat with me.
                                </a>
                            </h4>

                            <Formik
                                initialValues={{ name: '', email: '', message: '' }}
                                validate={values => {
                                    const errors = {};

                                    if (!values.name) {
                                        errors.name = 'Required!';
                                    }

                                    if (!values.email) {
                                        errors.email = 'Required!';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }

                                    if (!values.message) {
                                        errors.message = 'Required!';
                                    }
                                    return errors;

                                    //! server
                                }}
                                onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
                                    setSubmitting(true);
                                    axios.post('https://smtp-nodejs-my-server.herokuapp.com/sendMessage', {
                                        name: values.name,
                                        email: values.email,
                                        message: values.message
                                    })
                                        .then((res) => {
                                            setSubmitting(false);
                                            resetForm({ values: { name: '', email: '', message: '' } })
                                            setStatus(res.status)
                                            if (res.status === 200) {
                                                resetForm()
                                                setStatus({
                                                    sent: true,
                                                    msg: "Message has been sent! Thanks!"
                                                })
                                            }
                                        })
                                        .catch(err => {
                                            resetForm()
                                            setStatus({
                                                sent: false,
                                                msg: `Error! Please try again later.`
                                            })
                                        })
                                        .catch((err) => { throw new Error(err) })
                                }}
                            //! server
                            >
                                {({
                                    status,
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form className={s.form} id="contactForm" onSubmit={handleSubmit}>


                                        <div className={s.inputBox}>
                                            <input className={`${s.inputName} ${s.formItem}`}
                                                type="text"
                                                placeholder="Your Name*"
                                                title="Please enter your name"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            <span className={s.inputError}>  {errors.name && touched.name && errors.name} </span>
                                        </div>

                                        <div className={s.inputBox}>
                                            <input className={`${s.inputEmail} ${s.formItem}`}
                                                type="email"
                                                placeholder="Your Email*"
                                                title="Please enter email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <span className={s.inputError}>  {errors.email && touched.email && errors.email} </span>
                                        </div>

                                        <div className={s.inputBox}>
                                            <textarea className={`${s.textarea} ${s.formItem}`}
                                                type="text"
                                                placeholder="Message*"
                                                name="message"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.message}
                                            />
                                            <span className={s.inputError}>  {errors.message && touched.message && errors.message} </span>
                                        </div>

                                        {/* successful form submission message */}
                                        {status && status.msg && (
                                            <p
                                                className={`${s.alert} ${status.sent ? s.alertSuccess : s.alertError
                                                    }`}
                                            >
                                                {status.msg}
                                            </p>
                                        )}
                                        {/* successful form submission message */}

                                        <button className={isSubmitting ? `${s.formButton} ${s.formButtonDisabled}` : s.formButton}
                                            type="submit"
                                            disabled={isSubmitting}>
                                            Contact me
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;