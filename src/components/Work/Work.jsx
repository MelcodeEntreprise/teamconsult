import React from 'react';
import './_work.scss';
import {FiSliders} from 'react-icons/fi';
import {BsFileEarmarkCodeFill} from 'react-icons/bs';
import {MdSettingsRemote} from 'react-icons/md';

const Work = () => {
  return (
    <section>
        <div className="work">
            <div className="work__head" data-aos="fade-down">
                <div className="__para1">
                    <p>Prgression du travail</p>
                </div>
                <h1>Comment nous travaillons</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate doloremque rerum voluptatum quidem sequi amet exercitationem</p>
            </div>

            <div className="work__parts">
                <div className="work__part__1" data-aos="fade-down">
                    <BsFileEarmarkCodeFill />
                    <span>Etape 1</span>
                    <h2>Validation des idées</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
                <div className="work__part__2" data-aos="fade-down">
                    <FiSliders />
                    <span>Etape 2</span>
                    <h2>Strategie de business</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
                <div className="work__part__3" data-aos="fade-down">
                    <MdSettingsRemote />
                    <span>Etape 3</span>
                    <h2>Implémentation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non? Cumque, neque, saepe fugit minus veniam doloribus assumenda facere autem aspernatur, aliquid alias iste necessitatibus impedit velit exercitationem id accusamus!</p>
                </div>
            </div>

            <div className="work__subscribe" data-aos="fade-down">
                <h1>Votre meilleure journée de business avec Business Consulting</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo architecto voluptatem nobis!</p>
                <button>Participez à un meeting</button>
            </div>
        </div>
    </section>
  )
}

export default Work