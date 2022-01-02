import { Link as RouteLink } from 'react-router-dom';
import { routes } from '../../../App';
import s from './Testimonial.module.scss';
import { Formik, Form, Field, ErrorMessage, FormikHelpers as FormikActions } from 'formik';
import testimonial from '../../images/background/testimonial.jpg';
import axios from 'axios';

const TestimonialForm = () => {

  return (
    <div className={s.section}>
      <div className={s.sectionBgBox}>
        <img className={s.sectionBgImg} src={testimonial} alt="images background"
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-delay="100" />
      </div>
      <div className={s.sectionContainer}>
        <div className={s.globalContainer}>
          <div className={s.sectionContent}>

            <RouteLink className={s.linkToMain}
              to={routes.MAIN}>
              <p className={s.linkText}>
                back to houme
              </p>
            </RouteLink>

            <div className={s.formBlock}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100">
              <h4 className={s.formBlockTitle}>Please write your testimonial
              </h4>

              <Formik
                initialValues={{ name: '', position: '', company:'', testimonial: '' }}
                validate={values => {
                  const errors = {};

                  if (!values.name) {
                    errors.name = 'Required!';
                  }

                  if (!values.position) {
                    errors.position = 'Required!';
                  }

                  if (!values.company) {
                    errors.company = 'Required!';
                  }

                  if (!values.testimonial) {
                    errors.testimonial = 'Required!';
                  }
                  return errors;

                  //! server
                }}
                onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
                  setSubmitting(true);
                  axios.post('https://smtp-nodejs-my-server.herokuapp.com/sendMessage', {
                    name: values.name,
                    position: values.position,
                    company: values.company,
                    testimonial: values.testimonial
                  })
                    .then((res) => {
                      setSubmitting(false);
                      resetForm({ values: { name: '', position: '', company: '', testimonial: '' } })
                      setStatus(res.status)
                      if (res.status === 200) {
                        resetForm()
                        setStatus({
                          sent: true,
                          msg: "Thanks for your feedback!"
                        })
                        setTimeout(() => {
                          setStatus({
                            sent: false,
                            msg: ""
                          })
                        }, 3000)
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
                        type="text"
                        placeholder="Position*"
                        title="Please enter your position"
                        name="position"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                      />
                      <span className={s.inputError}>  {errors.position && touched.position && errors.position} </span>
                    </div>

                    <div className={s.inputBox}>
                      <input className={`${s.inputEmail} ${s.formItem}`}
                        type="text"
                        placeholder="Company*"
                        title="Please enter your company"
                        name="company"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                      />
                      <span className={s.inputError}>  {errors.company && touched.position && errors.company} </span>
                    </div>

                    <div className={s.inputBox}>
                      <textarea className={`${s.textarea} ${s.formItem}`}
                        type="text"
                        placeholder="Testimonial*"
                        title="Please enter your testimonial"
                        name="testimonial"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.testimonial}
                      />
                      <span className={s.inputError}>  {errors.testimonial && touched.testimonial && errors.testimonial} </span>
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
                      submit
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

export default TestimonialForm;