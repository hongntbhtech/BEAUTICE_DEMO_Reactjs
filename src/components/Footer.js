import React from 'react';
import "./Footer.css";
import footer_logo from '../assets/Image/Footer_Logo.png';

import vector from '../assets/Image/Vector.png';

import contact1 from '../assets/Image/facebook-f.png';
import contact2 from '../assets/Image/twitter_1.png';
import contact3 from '../assets/Image/linkedin-in.png';
import contact4 from '../assets/Image/youtube.png';
import contact5 from '../assets/Image/instagram_1.png';


function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer-main'>
                    <div className='bg-bottom'>
                        <div className='container-footer'>
                            <div className='footer-1'>
                                <img src={footer_logo} alt='abc'></img>
                                <p>
                                    Beautice <span className='p-children' style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '1.6px', fontWeight: 400 }}>
                                        is a Beauty Clinic WordPress Theme.
                                    </span>
                                </p>
                                <p>Baker Steet 101, NY, United States.</p>
                                <div className='footer-1-1'>
                                    <p>+521 569 8966.</p>
                                    <p>mail@company.com.</p>
                                </div>
                            </div>

                            <div className='footer-2'>
                                <h3>Pages</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Gallery</li>
                                    <li>Team</li>
                                </ul>
                            </div>

                            <div className='footer-3'>
                                <h3>Informations</h3>
                                <ul>
                                    <li>Terms & conditions</li>
                                    <li>Privacy policy</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                        </div>

                        <div className='btn-totop'>
                            <a href='http://localhost:3000/'>
                                <div className='totop'>
                                    <img src={vector} alt='abc'></img>
                                </div>
                            </a>
                        </div>

                        <div className='social-contact'>
                            <div className='contact-icon'>
                                <img src={contact1} alt='abc'></img>
                                <img src={contact2} alt='abc'></img>
                                <img src={contact3} alt='abc'></img>
                                <img src={contact4} alt='abc'></img>
                                <img src={contact5} alt='abc'></img>
                            </div>


                            <div className="copyright">
                                <p>© AltDesain Studio 2021 - All right reserved.</p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-footer">

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;