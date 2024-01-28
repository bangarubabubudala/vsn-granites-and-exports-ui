import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(interval);
    }, []); // Empty dependency array means it will only run once on mount
    const images = [
        process.env.PUBLIC_URL + '/img/img1.jpeg',
        process.env.PUBLIC_URL + '/img/img2.jpeg',
        process.env.PUBLIC_URL + '/img/img3.jpeg',
        process.env.PUBLIC_URL + '/img/img4.jpeg',
    ];

    const companyDetails = [
        {
            name: 'Product',
            description: 'Providing awesome products and services.',
        },
        {
            name: 'Product',
            description: 'Innovating for a better future.',
        },
        {
            name: 'Product',
            description: 'Your trusted partner in success.',
        },
        {
            name: 'Product',
            description: 'Your trusted partner in success.',
        },
    ];
    const currentCompany = companyDetails[currentImageIndex];

    return (
        < div id="home" className='outer-page-content-container' style={{ marginTop: "70px" }}>
            <div className="ft-1 text-center" style={{ backgroundColor: "#5e758b", borderRadius: "5px" }}>
                <h3><span>WELCOME TO</span> VSN GRANITES AND EXPORTS</h3>
            </div>



            {/*  */}


            <div className="slideshow-container">
                {/* <marquee class="marq" 
                 direction="left" loop=""> 
            <div class="geek1"> 
                ""WELCOME TO  VSN GRANITES AND EXPORTS""
            </div> 
        </marquee> */}

                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="slideshow-image"
                />
                {/* <div className="company-details">
                    <h2>{currentCompany?.name}</h2>
                    <p>{currentCompany?.description}</p>
                </div> */}
            </div>
        </div>
    )
}

export default Home
