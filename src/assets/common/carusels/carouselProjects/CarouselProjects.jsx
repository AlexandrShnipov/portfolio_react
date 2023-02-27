import React from 'react';
import Slider from 'react-slick';
import cards from '../../../images/projects/cards.png';
import desire from '../../../images/projects/desire.png';
import thrivetalk from '../../../images/projects/thrivetalk.png';
import cleanAndSimple from '../../../images/projects/cleaAndSimple.png';
import smoothie from '../../../images/projects/smoothie.png';
import crelloEmail from '../../../images/projects/crelloEmail.png';
import delivery from '../../../images/projects/delivery.png';
import helyfly from '../../../images/projects/helyfly.png';
import sensive from '../../../images/projects/sensive.png';
import bgfBank from '../../../images/projects/bgfBank.png';
import moviesDB from '../../../images/projects/moviesDB.png';
import onlineStore from '../../../images/projects/onlineStore.png'
import socialNetwork from '../../../images/projects/socialNetwork.png'
import calculator from '../../../images/projects/calculator.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './CarouselProjects.module.scss';
import styles from './CarouselProjects.scss';
import LinkColor from '../../linkColor/LinkColor';
import CarouselProjectsItem from './carouselProjectsItem/CarouselProjectsItem';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className={'carouselProject'} dotsClass={'dots'}>
      <div className={s.slider}>
        {/* 1 */}
        <div className={s.sliderItems}>

          {/* 1.1 */}
          <CarouselProjectsItem
            img={socialNetwork}
            title="Social network"
            stack="React, Redux, React Hooks, Ajax, HTML, CSS"
            logInToTheSystem='Log in:'
            email='free@samuraijs.com, Password: free'>
            <LinkColor
              href={'https://alexandrshnipov.github.io/social-React/'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/social-React.git'}
              text="open source code"/>
          </CarouselProjectsItem>

          {/* 1.2 */}
          <CarouselProjectsItem
            img={onlineStore}
            title="Online store"
            stack="React, Redux, GraphQL, HTML, SCSS">
            <LinkColor
              href={'https://github.com/AlexandrShnipov/onlineStore.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>

      {/* 2 */}
      <div className={s.slider}>
        <div className={s.sliderItems}>
          {/* 2.1 */}
          <CarouselProjectsItem
            img={cards}
            title="Learning cards"
            stack="HTML, CSS, Figma, TypeScript, teamwork with front-end developers"
          >
            <LinkColor
              href={'https://matumba125.github.io/learningApp'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/Matumba125/learningApp.git'}
              text="open source code"/>
          </CarouselProjectsItem>

          {/* 2.2 */}
          <CarouselProjectsItem
            img={moviesDB}
            title="MoviesDB"
            stack="SvelteKit, JS, HTML, CSS">
            <LinkColor
              href={'https://movies-db-svelte-kit.vercel.app/'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/moviesDB-SvelteKit.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>

      {/* 3 */}
      <div className={s.slider}>
        <div className={s.sliderItems}>
          {/* 3.1 */}
          <CarouselProjectsItem
            img={calculator}
            title="Calculator-Svelte"
            stack="Svelte">
            <LinkColor
              href={'https://calculator-sveltekit-dgml3da0y-alexandrshnipov.vercel.app/'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/calculator-sveltekitNew.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
          {/* 3.2 */}
          <CarouselProjectsItem
            img={bgfBank}
            title="BGF Bank"
            stack="HTML, CSS, JS, PHP, Figma">
            <LinkColor
              href={'https://alexandrshnipov.github.io/bgfBankIP/'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/bgfBankIP.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>

      {/* 4 */}
      <div className={s.slider}>
        <div className={s.sliderItems}>

          {/* 4.1 */}
          <CarouselProjectsItem
            img={crelloEmail}
            title="Crello email letter"
            stack="HTML, CSS, Email letter, Figma">
            <LinkColor
              href={'https://alexandrshnipov.github.io/Crello__E-mail'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/Crello__E-mail.git'}
              text="open source code"
            />
          </CarouselProjectsItem>

          {/* 4.2 */}
          <CarouselProjectsItem
            img={helyfly}
            title="HELYFLY"
            stack="HTML, CSS, SCSS, React, Mobile First, Pixel perfect, Figma">
            <LinkColor
              href={'https://alexandrshnipov.github.io/mob-first-start_HELYFLY'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/mob-first-start_HELYFLY.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>

      <div className={s.slider}>
        <div className={s.sliderItems}>

          {/* 5.1 */}
          <CarouselProjectsItem
            img={desire} title="Desire"
            stack="HTML, CSS, SCSS, JS, Gulp, Figma">
            <LinkColor
              href={'https://alexandrshnipov.github.io/desire-gulp'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/desire-gulp.git'}
              text="open source code"
            />
          </CarouselProjectsItem>

          {/* 5.2 */}
          <CarouselProjectsItem
            img={smoothie} title="Smoothie"
            stack="HTML, CSS, LESS, JS, Photoshop">
            <LinkColor href={'https://alexandrshnipov.github.io/smoothie'}
                       text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/smoothie.git'}
              text="open source code"/>
          </CarouselProjectsItem>
        </div>
      </div>

      <div className={s.slider}>
        <div className={s.sliderItems}>

          {/*{6.1}*/}
          <CarouselProjectsItem
            img={thrivetalk}
            title="Thrivetalk"
            stack="HTML, CSS, SCSS, JS, Gulp, Figma">
            <LinkColor href={'https://alexandrshnipov.github.io/Travetalk_NEW'}
                       text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/Travetalk_NEW.git'}
              text="open source code"
            />
          </CarouselProjectsItem>

          {/*6.2*/}
          <CarouselProjectsItem
            img={delivery}
            title="Delivery"
            stack="HTML, CSS, JS, Figma">
            <LinkColor
              href={'https://alexandrshnipov.github.io/Delivery-Food-New'}
              text="view project"/>
            <LinkColor
              href={'https://github.com/AlexandrShnipov/Delivery-Food-New.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>

      <div className={s.slider}>
        <div className={s.sliderItems}>

          {/*7.1*/}
          <CarouselProjectsItem
            img={sensive}
            title="SENSIVE"
            stack="WordPress, HTML, CSS, Bootstrap, PHP, Hosting">
            <LinkColor
              href={'https://github.com/AlexandrShnipov/sensive-WP.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
          {7.2}
          <CarouselProjectsItem
            img={cleanAndSimple}
            title="Clean And Simple"
            stack="HTML, CSS, Bootstrap, Figma"
          >
            <LinkColor
              href={'https://alexandrshnipov.github.io/clean_and_simple_website'}
              text="view project"
            />
            <LinkColor
              href={'https://github.com/AlexandrShnipov/clean_and_simple_website.git'}
              text="open source code"
            />
          </CarouselProjectsItem>
        </div>
      </div>
    </Slider>
  );
}
