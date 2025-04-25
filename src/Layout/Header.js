import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={"/"} className='logo'>
                            <img src="/Logo/main-logo.png" alt='Logo' className='img-fluid' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto n">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>
                                <div className='cart'>
                                    <i className="bi bi-cart"></i>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
