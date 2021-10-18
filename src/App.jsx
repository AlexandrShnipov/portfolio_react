import react from 'react';
import s from './App.module.scss';
import Header from '../src/assets/common/header/Header';
import Home from '../src/assets/components/pages/home/Home';
import About from '../src/assets/components/pages/about/About';

function App() {
  return (
    <div className={s.App}>
   <Header/>
   <Home/>
   <About/>
    </div>
  );
}

export default App;
