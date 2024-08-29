import React from 'react'
import slider_img from '../assets/Image/Animation-1.png';
import "./Slider.css";

function Slider() {
    return (

        <>
            <div className='slider-container'>
                <div className='slider-left'>
                    <h1>
                        Clinic & beauty consultant
                    </h1>

                    <p>It is a long established fact that a reader will be by the readable content of a page.</p>

                    <div className='slider-item'>
                        <button className='slider-buttons'>More Details</button>
                    </div>
                </div>

                <div className='slider-right'>
                <img src={slider_img} alt='Logo' />
                </div>
            </div>

            <div className='main-rec'>
            <div className="rectangle_1"></div>
                <div className="rectangle_2"></div>
                <div className="rectangle_3"></div>
            </div>
        </>
    )
}

export default Slider;