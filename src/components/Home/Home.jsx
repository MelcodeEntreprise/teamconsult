import React from 'react';
import './_home.scss';
import {AiFillPlayCircle} from 'react-icons/ai';
import homeImg from '../../assets/img/home.png';
import cocheImg from '../../assets/img/coche.png';
import Logo from '../../assets/img/logo.png';

const Home = () => {
  return (
    <section>
      <div className="home">
            <div className="home__left" data-aos="zoom-in" data-aos-duration="1000">
                <div className="__para1">
                    <p>Construisez votre plan</p>
                </div>
                <h1>Tous ce dont vous avez besoin pour gérer votre activité en ligne.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque, blanditiis quisquam adipisci placeat dolore, omnis illo quos beatae minima mollitia reprehenderit harum ducimus! Earum iure animi sed sequi dignissimos!</p>
                <div className="home__btn">
                    <button className="home__btn1">Commencez - gratuitement</button>
                    <button className="home__btn2"><AiFillPlayCircle />Voir une démo</button>
                </div>
            </div>
            <div className="home__right" data-aos="zoom-in" data-aos-delay="600">
            <div className="home__right__img">
                    <img src={homeImg} alt="home__page" className="home__img" />
                    <div className="home__right__icon1">
                        <img src={cocheImg} alt="icon" />
                        <p>Le meilleur d'internet</p>
                    </div>
                    <div className="home__right__icon2">
                        <img src={cocheImg} alt="icon" />
                        <p>je ne peut pas être sans Melcode</p>
                    </div>
            </div>
            </div>
      </div>
      <div data-aos="fade-down" className="sub__home">
          <div className="sub__home__title">
              <h2>Approuvez par des entreprises du monde entier</h2>
          </div>
          <div className="sub__home__img">
              <img src={Logo} alt="logo" />
          </div>
      </div>

    </section>
  )
}

export default Home