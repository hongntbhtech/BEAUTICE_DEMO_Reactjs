import React from 'react';
import "./Proteams.css";
import actor1 from '../assets/Image/unsplash_pTrhfmj2jDA.png';
import actor2 from '../assets/Image/unsplash_FVh_yqLR9eA.png';
import actor3 from '../assets/Image/unsplash_mEZ3PoFGs_k.png';
import icon1 from '../assets/Image/Twitter.png';
import icon2 from '../assets/Image/Facebook.png';
import icon3 from '../assets/Image/Instagram.png';
function Proteams(){
    return(
        <>
            <div className='proteams-container'>
                <div className='proteams-title'>
                    <h4>Professional Teams</h4>
                    <h1>The Professional expert</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className='proteams-box'>
                    <div className='proteams-box-left'>
                        <img src={actor1} alt='abc'></img>
                        <h5>Surgeon</h5>
                        <h4>Briyan Nevalli</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className='social-media'>
                            <img src={icon1} alt='abc'></img>
                            <img src={icon2} alt='abc'></img>
                            <img src={icon3} alt='abc'></img>
                        </div>
                    </div>

                    <div className='proteams-box-mid'>
                        <img src={actor2} alt='abc'></img>
                        <h5>Dermatologist</h5>
                        <h4>Bella sebastian</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className='social-media'>
                            <img src={icon1} alt='abc'></img>
                            <img src={icon2} alt='abc'></img>
                            <img src={icon3} alt='abc'></img>
                        </div>
                    </div>

                    <div className='proteams-box-right'>
                        <img src={actor3} alt='abc'></img>
                        <h5>Stylist expert</h5>
                        <h4>Lilly Adams</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className='social-media-right'>
                            <img src={icon1} alt='abc'></img>
                            <img src={icon2} alt='abc'></img>
                            <img src={icon3} alt='abc'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proteams;