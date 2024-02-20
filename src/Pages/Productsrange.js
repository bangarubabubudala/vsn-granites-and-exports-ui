import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
// import { Media } from './images/Pics.js';
import { Medias } from '../images/Pics-2';

const Productsrange = () => {
  const [file, setFile] = useState(null);
    
  return (
    <div>
      <div id="service" className='outer-page-content-container'>
        <div className="products-galary-bg">


          <div className="container">
            <div className="wpb_wrapper">
              <div className="wbc-heading clearfix">
                <div className="default-heading">WHAT MAKES US GREAT</div>
              </div>
              <div className="wbc-heading clearfix">
                <h3 className="special-heading-3">OUR <span className="wbc-color">PRODUCT RANGE</span></h3>
              </div>
              <hr className="wbc-hr" />
              <div className="wbc-heading clearfix">
                <div className="default-heading">
                  Welcome to India's Top Manufacturer and Exporter of Granite, Marble, and Quartz. PM International is a wonderful hub for the finest quality Indian granite with a broad selection of marble, and quartz. The architecture of households, offices, commercial buildings, hospitals, schools, and other structures serves the collection of diverse granite and marbles.
                </div>
              </div>
            </div>
            <div className="media-container">
              {
                Medias.map((file, index) => (
                  <div className="media" key={index} onClick={() => setFile(file)}>
                    {
                      file.type === 'image' ? <div className="cards-list">

                        <div className="card-stone 1">
                          <div className="card_image"> <img src={file.url} alt='#' /> </div>
                          <div className="card_title title-white">
                            <p>{file.title}</p>
                          </div>
                        </div>
                      </div> : null

                    }


                  </div>

                ))
              }

            </div>


            <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
              <span onClick={() => setFile(null)}>&times;</span>
              {
                file?.type === 'image' ? <img src={file?.url} ></img> : null
              }
            </div>
          </div>

          <div>
            <h2 className='button-About'><a href="/"><button class="bn632-hover bn18">View More</button></a></h2>
          </div>

        </div>
      </div>

      
    </div>
  )
}

export default Productsrange