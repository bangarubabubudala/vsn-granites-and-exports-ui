import { useState } from 'react';
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

const Header = () => {
    // const [isMenuOpen, setMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    // };

    // const closeMenu = () => {
    //     setMenuOpen(false);
    // };
    const { scrollToTop, scrollToTopRef } = useScrollToTop();

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
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
                    <Navbar.Toggle
                        // onClick={toggleMenu}
                        aria-controls="offcanvasNavbar-expand-expand" />
                    <Nav>
                        <Button className='btn'>Home</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;