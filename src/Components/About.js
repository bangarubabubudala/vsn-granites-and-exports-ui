import React from 'react'
import { Container } from 'react-bootstrap';
import videoBg from '../assets/videoBg.mp4';

const About = () => {
    return (
        <div div id="about" className='outer-page-content-container' style={{ top: "0px" }}>
            <h2 className='abt-title'>About us</h2>
            <div className='line-under1'>
                <div className='line-under'></div>
            </div>
            <div className='center-vsn-about'>
                <div style={{ width: '100%' }}>
                    <p className='about-para'>
                        <b>VSN Granites and Exporters</b>&nbsp;
                        is one of the market leaders and An ISO 9001:2015 Certified Manufacturers.
                        Exporters & Suppliers of natural stones viz. granite. marble,
                        sandstone and counter tops. in days to come with our different approach
                        and strategy by coping-up with the foreign buyer's expectations in terms of quality,
                        uniform collor, polish, price and timely deliveries and through personalized interaction,
                        we aim to be the india's top Granite, Marble & Sandstone exporters company in india

                        We are backed by a team of qualified professionals,
                        who have a rich knowledge of stone industry. <br></br>
                        Our professionals are well-versed with the handling knowledge of latest cutting & finishing machines,
                        as a result we are bringing forth best quality Granites, Marbles,
                        Sandstones and Kitchen Counter Tops for the clients.
                        With the dedication of our professionals, we are offering such Granites
                        and other products that are globally acclaimed of their excellent finishing hardness,
                        easy to clean property and resistance to acid. Moreover, we have mustered
                        huge patronage due to our nominal rates and availability of entire range of natural
                        stones and granites in different colors, textures, thickness and sizes
                    </p>
                </div>

                <div className='video-play' style={{ width: '100%' }}>
                    <video src={videoBg} autoPlay loop muted></video>

                </div>

            </div>
            <div>
                <h2 className='button-About'><button>view More</button></h2>
            </div>

        </div>

    )
}

export default About
