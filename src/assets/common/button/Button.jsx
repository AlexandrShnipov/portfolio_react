import React from "react";
import s from './Button.module.scss';
import { useState } from "react";

const Button = ({text, isSubmitting}) => {

    return (

     
    <button className={isSubmitting ? `${s.button} ${s.buttonDisabled}` : s.button}
      type="submit"
      disabled={isSubmitting}>
      {text}
    </button>

  )
}
export default Button;