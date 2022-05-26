import React from 'react';
import './_about.scss';
import cocheImg from '../../assets/img/coche.png';
import avatar1 from '../../assets/svg/avatar1.svg';
import avatar2 from '../../assets/svg/avatar2.svg';
import avatar3 from '../../assets/svg/avatar3.svg';
import {AiOutlineSetting} from 'react-icons/ai';
import {BiTransfer} from 'react-icons/bi';
import {BiHistory} from 'react-icons/bi';
import {AiFillCreditCard} from 'react-icons/ai';

const About = () => {
  return (
    <section>
        <div className="about">
            <div className="about__left" data-aos="fade-down">
                <div className="__para1">
                    <p>Qu'est ce qu'il font?</p>
                </div>
                <h1>Prise en charge pour votre business de développement en ligne</h1>
                <div className="about__list">
                    <div className="about__one">
                        <img src={cocheImg} alt="" />
                        <p>Lorem ipsum dolor sit, amet.</p>
                    </div>
                    <div className="about__one">
                        <img src={cocheImg} alt="" />
                        <p>Lorem ipsum dolor sit, amet.</p>
                    </div>
                    <div className="about__one">
                        <img src={cocheImg} alt="" />
                        <p>Lorem ipsum dolor sit, amet.</p>
                    </div>
                </div>
                <p className="about__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in dolor cumque sapiente. Repellat nam eveniet laudantium, distinctio perferendis accusamus non repellendus.</p>
            </div>

            <div className="about__sub">
                <div className="about__right">
                    <div className="about__avatars" data-aos="fade-down">
                        <div className="about__avatar__head">
                            <p>Recents</p>
                            <p className="about__para2">Voir tous les contacts</p>
                        </div>
                        <div className="about__avatar__img">
                            <div className="about__avatar__one">
                                <img src={avatar1} alt="" />
                                <p>Diana</p>
                            </div>
                            <div className="about__avatar__one">
                                <img src={avatar2} alt="" />
                                <p>Coby</p>
                            </div>
                            <div className="about__avatar__one">
                                <img src={avatar3} alt="" />
                                <p>Ben</p>
                            </div>
                        </div>
                    </div>

                    <div className="about__accompte" data-aos="fade-down">
                        <div className="about__accompte__1">
                            <h1>M</h1>
                            <AiOutlineSetting />
                        </div>
                        <div className="about__accompte__1">
                            <h3>Salut John</h3>
                            <h3>$35,091</h3>
                        </div>
                        <div className="accompte__display">
                            <div className="accompte__display__one">
                                <BiTransfer />
                                <p>Transfert</p>
                            </div>
                            <div className="accompte__display__one">
                                <AiFillCreditCard />
                                <p>Carte</p>
                            </div>
                            <div className="accompte__display__one">
                                <BiHistory />
                                <p>Historique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About