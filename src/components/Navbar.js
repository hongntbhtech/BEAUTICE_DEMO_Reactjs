import React, { useState } from 'react';
import logo from '../assets/Image/Main_Logo.png';
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link} from 'react-router-dom';
// import { Button } from './Button';
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
       <div className='navbar-logo'>
       <img src={logo} alt='Logo' />
       </div>

       <div className='menu-icon' onClick={handleClick}>
       {click ? <FaTimes /> : <FaAlignJustify />}
       </div>

       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to =  '/' className='nav-links' onClick={closeMobileMenu} >
                Home +
                </Link>
            </li>

            <li className='nav-item'>
                <Link to =  '/about' className='nav-links' onClick={closeMobileMenu} >
                About
                </Link>
            </li>

            <li className='nav-item'>
                <Link to =  '/service' className='nav-links' onClick={closeMobileMenu} >
                Service
                </Link>
            </li>

            <li className='nav-item'>
                <Link to =  '/gallery' className='nav-links' onClick={closeMobileMenu} >
                Gallery
                </Link>
            </li>

            <li className='nav-item'>
                <Link to =  '/blog' className='nav-links' onClick={closeMobileMenu} >
                Blog
                </Link>
            </li>

            <li className='nav-item'>
                 <button className='nav-buttons'>Contact</button>
            </li>
       </ul>
      </div>
    </nav>
  );
}

export default Navbar;
