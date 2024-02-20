import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import useScrollToTop from '../Components/hooks/useScrollToTop ';
import '../App.css'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { TiThMenu } from "react-icons/ti";
import Logo from '../assets/Logo.png'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    return (
        <>
            <Navbar collapseOnSelect expand='lg' fixed="top" className="VSN-Top-Nav" style={{ posistion: "fixed", top: "0px" }}>
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            src={Logo}
                            width="150"
                            height="400"
                            className="d-inline-block align-top"
                            alt="#VSN Granites and Exports"
                        /></Navbar.Brand>
                   
                    <Navbar.Toggle
                        onClick={toggleMenu}
                        aria-controls="offcanvasNavbar-expand-expand" />
                    
                    <Nav>
                        {isMenuOpen && <>
                            <button type='button' className='btn btn-outline-light' >Home</button>&nbsp;
                            <button type='button' className='btn btn-outline-light'>About US</button>&nbsp;
                            <button type='button' className='btn btn-outline-light'>Contact</button>&nbsp;
                            <button type='button' className='btn btn-outline-light' >Services</button>&nbsp;
                        </>
                        }
                        <Button className='btn btn-light' onClick={toggleMenu}><TiThMenu /></Button>

                    </Nav>
                </Container>
            </Navbar>
            
        </>
    );
}

export default Header;