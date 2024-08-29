import React from 'react'
import play from '../assets/Image/Play_button.png';
import img_about_right from '../assets/Image/unsplash_LRXYS0tSyGc.png';
import "./About.css";
function About() {
    return (
        <>
            <div className='about-container'>
                <div className='about-left'>
                    <h4>About Us</h4>
                    <h1>We are the best beauty clinic</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                    <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                    <div className='about-button'>
                        <div className='about-btn-learnmore'>
                            <button className='btn-learnmore'>Learn More</button>
                        </div>
                        <div className='about-play'>
                            <img src={play} alt='abc'></img>
                            <p>Watch Video</p>
                        </div>
                    </div>
                </div>

                <div className='about-right'>
                    <img src={img_about_right} alt='abc'></img>
                </div>
            </div>

        </>
    )
}

export default About;