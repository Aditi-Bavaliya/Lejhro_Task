import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.png'; 
import '../App.css';
const Header = () => {
  return (
    <>
    <Navbar variant="light" expand="lg" className="navbar-custom"  style={{ padding: '30px 90px',backgroundColor:"rgb(186, 104, 16)" }}>
      <Container>
      <img
              src={logo} // Use the imported logo variable
              alt="Logo"
              height="50"
              className="d-inline-block align-top"
            />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#innovations" className="text-white fs-5">Innovations</Nav.Link>
            <Nav.Link href="#business-services" className="text-white fs-5">Business Services</Nav.Link>
            <Nav.Link href="#financial-services" className="text-white fs-5">Financial Services</Nav.Link>
            <Nav.Link href="#bootcamp" className="text-white fs-5">Bootcamp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container><br/>
      
    </Navbar>
   <h1  style={{padding: '45px 100px', color:"white", fontFamily: "Arial", backgroundColor:"rgb(186, 104, 16)"}}>Blogs</h1>
    </>
  );
}

export default Header;
