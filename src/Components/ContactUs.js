import React from 'react'
import { Container } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <>
            <div id="service" className='outer-page-content-container'>
            <div className="contact-us-layout">

            
                
                <section>

                    <div className="cnt-container">

                        <div className="cnt-form-1">


                            <form action='#' method='POST'>
                                <h2 style={{textAlign:"center"}}>Send Message</h2>
                                <div className="contcat-from">
                                 
                                    <div className="inputbox">
                                        <input type="text" required="required" />
                                        <span>Fullname</span>
                                    </div>

                                    <div className="inputbox">
                                        <input type="text" required="required" />
                                        <span>Email</span>
                                    </div>
                                    <div className="inputbox">
                                        <input type="text" required="required" />
                                        <span>Mobile Number</span>
                                    </div>

                                    <div className="inputbox">
                                        <textarea required="required" />
                                        <span>Type Your Message</span>
                                    </div>
                                    <div className="inputbox">
                                        <div className="inputcenter">
                                            <div>
                                                <input type="submit" value="send" />
                                            </div>


                                        </div>

                                    </div>

                                </div>


                            </form>
                        </div>

                        <div className="cnt-form-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.193028801522!2d79.76499547512573!3d15.581332285029696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM0JzUyLjgiTiA3OcKwNDYnMDMuMyJF!5e0!3m2!1sen!2sin!4v1707791351681!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            />
                        </div>

                    </div>
                </section>
                </div>


            </div>
        </>
    )
}

export default ContactUs
