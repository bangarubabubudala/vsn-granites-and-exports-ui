import React from 'react'
import MainLayout from './Layouts/MainLayout';
import Header from './Header/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import BussinceExcellence from './Components/BussinceExcellence';
import Testimonials from './Components/Testimonials';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      {/* <MainLayout /> */}
      <Header />
      <section>
<Home />
{/* <BussinceExcellence /> */}
      </section>
      <About/>
      <Products />
      <BussinceExcellence />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
