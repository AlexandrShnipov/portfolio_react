import React from "react";
import s from './Testimonial.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import testimonial from '../../images/background/testimonial.jpg';

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
            <div className={s.formBlock}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100">
              <h4 className={s.formBlockTitle}>Please write your testimonial
              </h4>

              <Formik
                initialValues={{ name: '', position: '', testimonial: '' }}
                validate={values => {
                  const errors = {};

                  if (!values.name) {
                    errors.name = 'Required!';
                  }

                  if (!values.position) {
                    errors.position = 'Required!';
                  }
                 
                  if (!values.testimonial) {
                    errors.testimonial = 'Required!';
                  }
                  return errors;

                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form className={s.form} action="/" onSubmit={handleSubmit}>


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
                        placeholder="Position and place of work*"
                        title="Please enter your position and place of work"
                        name="position"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                      />
                      <span className={s.inputError}>  {errors.position && touched.position && errors.position} </span>
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



                    <button className={s.formButton}
                      type="submit"
                      disabled={isSubmitting}>submit</button>
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