import React, {useEffect} from 'react';
import config from 'react-reveal/globals';
import s from './App.module.scss';
import Header from '../src/assets/common/header/Header';
import Home from '../src/assets/components/pages/home/Home';
import About from '../src/assets/components/pages/about/About';
import Projects from '../src/assets/components/pages/projects/Projects';
import Education from '../src/assets/components/pages/education/Education';
import Testimonials from '../src/assets/components/pages/testimonials/Testimonials';
import Contact from '../src/assets/components/pages/contact/Contact';
import Carusel from './assets/common/carusel/Carusel';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

config({ ssrFadeout: true });


function App() {

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
      <Home />
      <About />
      <Projects/>
      <Education />
      <Testimonials />
      <Contact />
      {/* <Carusel/> */}
    </div>
  );
}

export default App;
