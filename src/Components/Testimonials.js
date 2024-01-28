import React from 'react'
import { Container } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div id="service" className='outer-page-content-container'>
            <h2 className='Testimonial-title'>Happy client Works</h2>
            <div className='arrowline'>
                <div className='under-line'>

                </div> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(61,210,218,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path></svg></span>

            </div>
            {/* slide show */}
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Carousel indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                {/* <!-- Wrapper for carousel items --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="img-box"><img src="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" alt=""/></div>
                        <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                        <p className="overview"><b>Michael Holz</b></p>
                        {/* Seo Analyst at <a href="#">OsCorp Tech.</a> */}
                        <div className="star-rating">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-box"><img src="https://i.imgur.com/Uz4FjGZ.jpg" alt=""/></div>
                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        <p className="overview"><b>Paula Wilson</b></p>
                        {/* Media Analyst at <a href="#">SkyNet Inc.</a> */}
                        <div className="star-rating">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-box"><img src="	https://i.imgur.com/udGH5tO.jpg" alt=""/></div>
                        <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
                        <p className="overview"><b>Antonio Moreno</b></p>
                        {/* Web Developer at <a href="#">Circle Ltd.</a> */}
                        <div className="star-rating">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel controls --> */}
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>


            {/* --------------------- */}

        </div>
    )
}

export default Testimonials
