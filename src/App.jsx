import React, { useEffect, useState, Component } from 'react';
import config from 'react-reveal/globals';
import s from './App.module.scss';
import Testimonial from './assets/common/testimonial/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import MainPage from './assets/components/pages/mainPage/MainPage';
import Header from '../src/assets/common/header/Header';
import Footer from '../src/assets/common/footer/Footer';

const mainRoute = '/portfolio_react'
export const routes = {
  MAIN: `${mainRoute}/`,
  TESTIMONIAL: `${mainRoute}/testimonial`
}


config({ ssrFadeout: true });

const App = () => {
  const history = useHistory();

  useEffect(() => {
    AOS.init({

      duration: 1000,
      // once: true
    });
    AOS.refresh()
  }, [])

  return (
    <>
    <Header />
    <Switch>
      <Route exact path={routes.MAIN} render={() => <MainPage />} />
      <Route path={routes.TESTIMONIAL} render={() => <Testimonial />} />
    </Switch>
    <Footer />
    </>    
  );
}

export default App;
