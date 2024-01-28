import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3><span>VSN</span> Granites And Exports</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
              <div className="footer-icons">
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-instagram-fill"></i>

                <i class="ri-twitter-x-fill"></i>
                <i class="ri-youtube-fill"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              <p><i class="ri-phone-fill"></i> +92 3121324083</p>
              <p><i class="ri-mail-fill"></i>waleedishfaq1515@gmail.com</p>
              <p><i class="ri-map-pin-2-fill"></i> Andhjra pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>CopyRioghts@2024</p>
      </div>
    </>
  )
}

export default Footer;