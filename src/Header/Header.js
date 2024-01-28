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
                    {/* <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-expand"
                        aria-labelledby='offcanvasNavbarLabel-expand-expand'
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-expand">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id='offcanvasNavbarDropdown-expand-expand'
                                >
                                    <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                                    <NavDropdown.Item href="/services">
                                        Services
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/feedback">
                                        Feed Back
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas> */}
                    {/* <Navbar.Collapse id="navbar-collapse"
                    // className={isMenuOpen ? 'show' : ''}
                    >
                        <Nav className="ml-auto">
                            <Nav.Link href="/home" onClick={() => {
                                // closeMenu
                                scrollToTop()

                            }}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="/about" onClick={() => {
                                // closeMenu
                                scrollToTop()
                                toggleDropdown()

                            }}>about
                            </Nav.Link>
                            <NavDropdown>
                                <NavDropdown.Item href="#Profile">
                                    Dropdown
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#About">
                                    About
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#About">
                                    Sign Out
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/products" onClick={() => {
                                // closeMenu
                                scrollToTop()

                            }}>
                                Products
                            </Nav.Link>
                            <Nav.Link href="/services" onClick={() => {
                                // closeMenu
                                scrollToTop()

                            }}>
                                Services
                            </Nav.Link>
                            <Nav.Link href="/infrastructure" onClick={() => {
                                // closeMenu
                                scrollToTop()

                            }}>
                                Infra Structure
                            </Nav.Link>
                            <Nav.Link href="/feedback" onClick={() => {
                                // closeMenu
                                scrollToTop()

                            }}>
                                Feed Back
                            </Nav.Link>
                            <div ref={scrollToTopRef} style={{ visibility: 'hidden' }} />
                        </Nav>
                    </Navbar.Collapse> */}
                    <Nav>
                        <Button className='btn'>Home</Button>
                    </Nav>
                     <Nav>
                        <Button className='btn'>Home</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;