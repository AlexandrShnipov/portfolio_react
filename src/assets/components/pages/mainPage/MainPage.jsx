import React from "react";
import s from './MainPage.module.scss';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Testimonials from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import SocialBox from '../../../common/socialsBox/SocialBox';

const MainPage = () => {

  return (
    <div className={s.App}>
      <SocialBox />
      <Home />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  )

}

export default MainPage;