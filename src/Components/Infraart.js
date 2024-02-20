import React from 'react';
import img1 from '../assets/infra-1.jpg';
import img2 from '../assets/infra2.jpg';
import img3 from '../assets/infrabig3.jpg';
import img4 from '../assets/infra3.jpg';
import img5 from '../assets/infra5.jpg';
import img6 from '../assets/infra6.jpg';
import img7 from "../assets/infra4.jpg"


const Infraart = () => {
    return (
        <div id="service" className='outer-page-content-container'>
            {/* <div className="wpb_wrapper">
                <div className="wbc-heading clearfix">
                    <div className="default-heading">WHAT MAKES US GREAT</div>
                </div>
                <div className="wbc-heading clearfix">
                    <h3 className="special-heading-3">OUR <span className="wbc-color">Infrastucture</span></h3>
                </div>
                <hr className="wbc-hr" />
                <div className="wbc-heading clearfix">
                    <div className="default-heading">
                        VSN GRANITE AND EXPORTS relies on high-end machinery such as Block Dressing Machines, Multi Wire-Saw Machines, Resin Lin, Slabs line polish machines, Gang-Saws, Bridge Cutters, Multi Blade Block Cutters, Effuent Water Treatment Plants (Filter Plant with Filter Press) & other requisite machinery.
                        We provide you with granites according to your customizations in any kind of finish such as polished, flamed, leather, honed, lapotra, shot blasted and rock face.We have exclusive quarries of natural stone that are associated with our state-of -the-art calibration & Polishing plant and our gangsaw units. We have sophisticated stone-cutting plants that enable us to the specifications of our clients. 

                    </div>
                </div>
            </div> */}
            {/* <div className="row-layout">
            <section className="tours">
                    <div className="row">
                    <div className="col content-col">
                    <h1>Infrastructure</h1>
                            <hr className="wbc-hr" />

                            <div className="wbc-heading clearfix">
                        <div className="default-heading">
                                    VSN GRANITE AND EXPORTS relies on high-end machinery such as Block Dressing Machines, Multi Wire-Saw Machines, Resin Lin, Slabs line polish machines, Gang-Saws, Bridge Cutters, Multi Blade Block Cutters, Effuent Water Treatment Plants (Filter Plant with Filter Press) & other requisite machinery.
                                    We provide you with granites according to your customizations in any kind of finish such as polished, flamed, leather, honed, lapotra, shot blasted and rock face.We have exclusive quarries of natural stone that are associated with our state-of -the-art calibration & Polishing plant and our gangsaw units. We have sophisticated stone-cutting plants that enable us to the specifications of our clients.

                      </div>
                                <div className="col image-col ">
                                    <div className="image-gallary-2">
                                        <img src={imgsc} alt="" />
                                        <img src={Images} alt="" />
                                        
                                    </div>
                                </div>
                      
                    </div>
                    <a href="#" className='ctn'>Learn More</a>

                    </div>
                        <div className="col image-col ">
                            <div className="image-gallary">
                                <img src={imgsc} alt="" />
                                <img src={Images} alt="" />
                                <img src={Images3} alt="" />
                                <img src={Images4} alt="" />
                            </div>
                        </div>
                 
                        </div>

                </section>
               

            </div> */}

            <div className="main-container">
                <div className="grid-container">
                    <div className="card-infra card--2x">
                        <div className="card__content big-script padding-large">
                            <h1>Our Infrastructure</h1>
                            <div className="default-heading">
                                VSN GRANITE AND EXPORTS relies on high-end machinery such as Block Dressing Machines, Multi Wire-Saw Machines, Resin Lin, Slabs line polish machines, Gang-Saws, Bridge Cutters, Multi Blade Block Cutters, Effuent Water Treatment Plants (Filter Plant with Filter Press) & other requisite machinery.
                                We provide you with granites according to your customizations in any kind of finish such as polished, flamed, leather, honed, lapotra, shot blasted and rock face.We have exclusive quarries of natural stone that are associated with our state-of -the-art calibration & Polishing plant and our gangsaw units. We have sophisticated stone-cutting plants that enable us to the specifications of our clients.

                            </div>
                        </div>
                    </div>
                    <div className="card-infra card--horizontal">
                        <div className="card__image">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    
                    <div className="card-infra">
                        <div className="card__image">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className="card-infra">
                        <div className="card__image">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="card-infra card--horizontal">
                        <div className="card__image">
                            <img src={img6} alt="" />
                        </div>
                    </div>
                   
                    
                    <div className="card-infra card--horizontal">
                        <div className="card__image">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="card-infra card--horizontal">
                        <div className="card__image">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="card-infra">
                        <div className="card__image">
                            <img src={img7} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>




        </div>
       
    );
}

export default Infraart;
