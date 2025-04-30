import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './mainNavbarStyle.module.css'
import logo from '../../assets/Rua_a_Faroun-removebg-preview.png';

export default function MainNavbar() {
  return (
    <Navbar expand="lg" className={`bg-dark ${style.navBorder} sticky-top`}>
      <Container className=" text-capitalize">
        <Navbar.Brand href="#home"><img src={logo} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={`${style.links} ${style.navTextColor} text-light`} href="#home">Home</Nav.Link>
            <Nav.Link className={`${style.links} text-light`} href="#aboutme">About Me</Nav.Link>
            <Nav.Link className={`${style.links} text-light`} href="#skills">Skills</Nav.Link>
            <Nav.Link className={`${style.links} text-light`} href="#projects">Projects</Nav.Link>
            <Nav.Link className={`${style.contactBtn} text-light`} href="#contact">Contact</Nav.Link>
   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
