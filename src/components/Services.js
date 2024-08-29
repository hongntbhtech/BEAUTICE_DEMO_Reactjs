import React from 'react';
import "./Services.css";
import animation1 from '../assets/Image/Animation1.png';
import animation2 from '../assets/Image/Animation2.png';
import animation3 from '../assets/Image/Animation3.png';
function Services(){
    return(

        <>
            <div className='service-container'>
                <div className='service-title'>
                    <h4>Main Services</h4>
                    <h1>Learn services to focus on your beauty</h1>
                    <p>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>

                <div className='service-box'>
                    <div className='service-box-left'>
                        <img src={animation1} alt='Beauty consultation' />
                         <h3>Beauty consultation</h3>
                         <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>

                    <div className='service-box-mid'>
                    <img src={animation2} alt='Beauty consultation' />
                        <h3>Skin treatments</h3>
                        <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>

                    <div className='service-box-right'>
                    <img src={animation3} alt='Beauty consultation' />
                        <h3>Beauty product</h3>
                        <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;