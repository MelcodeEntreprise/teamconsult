import React from 'react';
import './_footer.scss';
import facebook from '../../assets/svg/facebook.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import twitter from '../../assets/svg/twitter.svg';
import Logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer__display" data-aos="fade-down">
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum sapiente dolor exercitationem.</p>
                <div className="footer__sociaux">
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
            <div className="footer__display" data-aos="fade-down">
                <h3>Solutions</h3>
                <p>Business Consulting</p>
                <p>Finances</p>
                <p>Business Planning</p>
            </div>
            <div className="footer__display" data-aos="fade-down">
                <h3>Contact</h3>
                <p>(+241) 066 74 34 53</p>
                <p>melcodeentreprise@gmail.com</p>
                <p>Libreville, Gabon</p>
            </div>
        </div>
        <div className="footer__copy">
            <img src={Logo} alt="" />
            <p>Tous droits réservés - Design et Développé par Melcode 2022</p>
        </div>
    </footer>
  )
}

export default Footer