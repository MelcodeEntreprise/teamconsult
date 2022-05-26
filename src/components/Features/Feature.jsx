import React from 'react';
import './_feature.scss';
import {BiMoney} from 'react-icons/bi';
import {IoMdFlashlight} from 'react-icons/io';
import {BsFillDiagram3Fill} from 'react-icons/bs';
import {AiFillHeart, AiFillStar} from 'react-icons/ai';
import avatar1 from '../../assets/svg/avatar1.svg';
import avatar2 from '../../assets/svg/avatar2.svg';
import avatar3 from '../../assets/svg/avatar3.svg';
import womanImg from '../../assets/img/woman.png';


const Feature = () => {
  return (
    <section>
        <div className="features">
            <div className="feature__head" data-aos="fade-down">
                <div className="__para1">
                    <p>Votre chemin vers le succès</p>
                </div>
                <h1>Commencez à construire votre projet, en le rendant customizable</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate doloremque rerum voluptatum quidem sequi amet exercitationem</p>
            </div>
            <div className="feature__parts">
                <div className="feature__part__1" data-aos="fade-down">
                    <BsFillDiagram3Fill />
                    <h2>Innovation accélérée</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
                <div className="feature__part__2" data-aos="fade-down">
                    <IoMdFlashlight />
                    <h2>Productivité</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
                <div className="feature__part__3" data-aos="fade-down">
                    <BiMoney />
                    <h2>Capital en ligne</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
            </div>

            <div className="feature__comments">
                <div className="feature__com" data-aos="fade-down">
                    <h2>"Wow quel superbe service, j'adore."</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, laudantium omnis. </p>
                    <div className="feature__com__author">
                        <img src={avatar1} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <p>Spécialiste de Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="feature__com" data-aos="fade-down">
                    <h2>"Melcode est un bon deal, je suis vraiment content"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, laudantium omnis. </p>
                    <div className="feature__com__author">
                        <img src={avatar2} alt="" />
                        <div>
                            <h3>Jane Doe</h3>
                            <p>Freelancer</p>
                        </div>
                    </div>
                </div>
                <div className="feature__com" data-aos="fade-down">
                    <h2>"Je dois vous le recommander"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, laudantium omnis. </p>
                    <div className="feature__com__author">
                        <img src={avatar3} alt="" />
                        <div>
                            <h3>Karlx Doe</h3>
                            <p>Entrepreneur</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feauture__pic">
               <div className="feature__img" data-aos="zoom-in-down">
                <img src={womanImg} alt="" />
                    <div className="feature__img__icon1">
                        <AiFillHeart />
                        <p>Avec de bons mentors</p>
                    </div>

                    <div className="feature__img__icon2">
                        <AiFillStar />
                        <p>La meilleure compagnie</p>
                    </div>
               </div>
               
                
            </div>


        </div>
    </section>
  )
}

export default Feature