import React, { useRef, useState } from 'react'
import MainLayout from './Layouts/MainLayout';
import Header from './Header/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import BussinceExcellence from './Components/BussinceExcellence';
import Testimonials from './Components/Testimonials';
import Footer from './Footer/Footer';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiThMenu } from "react-icons/ti";




const App = () => {

  const home = useRef(null);
  const about = useRef(null);
  const products = useRef(null);
  const bussiness = useRef(null);
  const test = useRef(null);

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      const yOffset = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <section className='mt-4' id='header'>
        <Navbar collapseOnSelect expand='lg' fixed="top" className="VSN-Top-Nav" style={{ posistion: "fixed", top: "0px" }}>
          <Container fluid>
            <Navbar.Brand>
              <img
                src="../img/vsnlogo.svg"
                width="150"
                height="40"
                className="d-inline-block align-top"
                alt="VSN Granites and Exports"
              /></Navbar.Brand>
            {/* <Navbar.Toggle
                        // onClick={toggleMenu}
                        aria-controls="offcanvasNavbar-expand-expand" />
                     */}
            <Nav>
              {isMenuOpen && <>
                <button type='button' className='btn btn-outline-light' onClick={() => scrollToComponent(home)}>Home</button>&nbsp;
                <button type='button' className='btn btn-outline-light' onClick={() => scrollToComponent(about)}>About</button>&nbsp;
                <button type='button' className='btn btn-outline-light' onClick={() => scrollToComponent(products)}>Products</button>&nbsp;
                <button type='button' className='btn btn-outline-light' onClick={() => scrollToComponent(bussiness)}>bussinessExcellence</button>&nbsp;
                <button type='button' className='btn btn-outline-light' onClick={() => scrollToComponent(test)}>Testimonials</button>&nbsp;
              </>
              }
              <Button className='btn btn-light' onClick={toggleMenu}><TiThMenu /></Button>

            </Nav>
          </Container>
        </Navbar>
      </section>
      <div ref={home} id="home">
        <Home />
      </div>
      <div ref={about} id='about'>
        <About />
      </div>
      <div ref={products} id='products'>
        <Products />
      </div>
      <div ref={bussiness} id='bussinessExcellence'>
        <BussinceExcellence />
      </div>
      <section ref={test} id="services">
        <Testimonials />
      </section>
      <Footer />
    </>
  )
}

export default App
