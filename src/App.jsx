import react from 'react';
import s from './App.module.scss';
import Header from '../src/assets/common/header/Header';
import Home from '../src/assets/components/pages/home/Home';
import About from '../src/assets/components/pages/about/About';
import Education from '../src/assets/components/pages/education/Education';
import Testimonials from '../src/assets/components/pages/testimonials/Testimonials';
import Contact from '../src/assets/components/pages/contact/Contact';


function App() {
  return (
    <div className={s.App}>
   <Header/>
   <Home/>
   <About/>
   <Education/>
   <Testimonials/>
   <Contact/>
    </div>
  );
}

export default App;
