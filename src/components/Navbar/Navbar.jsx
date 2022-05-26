import React, {useState} from 'react';
import './_navbar.scss';
import Logo from '../../assets/img/logo.png';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {

    const [menuNavbar, setMenuNavbar] = useState(false);

    const showMenu = () => setMenuNavbar(!menuNavbar);


  return (
    <nav>
        <div className="nav__logo">
            <img src={Logo} alt="my_logo" />
            <h3>Bussiness <br />Consulting</h3>
        </div>
        <ul className={menuNavbar ? 'nav__menu active' : 'nav__menu'}>
            <div className="nav__menu__bars__close" onClick={showMenu}>
                <AiOutlineClose />
            </div>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Achat</a></li>
            <li><a href="#">Fonctionnalités</a></li>
            <li><a href="#">Travail</a></li>
        </ul>
        <div className="nav__menu__bars" onClick={showMenu}>
            <BiMenuAltRight />
        </div>
        
    </nav>
  )
}

export default Navbar