import React, { useEffect, useState, Component } from 'react';
import config from 'react-reveal/globals';
import s from './App.module.scss';
import Header from '../src/assets/common/header/Header';
import Home from '../src/assets/components/pages/home/Home';
import About from '../src/assets/components/pages/about/About';
import Projects from '../src/assets/components/pages/projects/Projects';
import Education from '../src/assets/components/pages/education/Education';
import Experiense from '../src/assets/components/pages/experiense/Experiense';
import Testimonials from '../src/assets/components/pages/testimonials/Testimonials';
import Contact from '../src/assets/components/pages/contact/Contact';
import Footer from '../src/assets/common/footer/Footer'
import SocialBox from '../src/assets/common/socialsBox/SocialBox';
import AOS from 'aos';
import 'aos/dist/aos.css';


config({ ssrFadeout: true });

const App = () => {

  useEffect(() => {
    AOS.init({

      duration: 1000,
      // once: true
    });
    AOS.refresh()
  }, [])

  return (
    <div className={s.App}>
      <Header />
      <SocialBox/>
      <Home />
      <About />
      <Projects />
      <Education />
      <Experiense/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
