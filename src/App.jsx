import react from 'react';
import s from './App.module.scss';
import Header from '../src/assets/common/header/Header';
import Home from '../src/assets/components/pages/home/Home';
import About from '../src/assets/components/pages/about/About';
import Education from '../src/assets/components/pages/education/Education';
import Contact from '../src/assets/components/pages/contact/Contact';

function App() {
  return (
    <div className={s.App}>
   <Header/>
   <Home/>
   <About/>
   <Education/>
   <Contact/>
    </div>
  );
}

export default App;
