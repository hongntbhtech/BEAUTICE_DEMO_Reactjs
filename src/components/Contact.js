import React from 'react';
import "./Contact.css";
import contact_img from '../assets/Image/Contact_Animations.png';
function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className='contact-left'>
                    <img src={contact_img} alt='abc'></img>
                </div>


                <div className='contact-right'>
                    <h5>Contact Us</h5>
                    <h1>Send your inquiry to our expert team</h1>
                    <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>

                    <form className='frm-contact'>
                        <div className='ipt-name'>
                            <input className='txtFirstName' type="text" placeholder="First name"></input>
                            <input className='txtLastName' type="text" placeholder="Last name"></input>
                        </div>

                        <div className='ipt-email'>
                            <input className='txtEmail' type="email" placeholder='Email address'></input>
                        </div>

                        <div className='ipt-sub'>
                            <input className='txtSub' type="text" placeholder='Subject message'></input>
                        </div>

                        <div className='ipt-in'>
                            <textarea className="txtIn" type="text" placeholder="Your inquiry here"></textarea>
                        </div>
                    </form>

                    <div className='button-contact'>
                        <button className='btn-contact'>Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;