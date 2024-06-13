import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-white text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Company</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark text-decoration-none">Innovations</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Business Services</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Financial Services</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Lejhro Recruiter</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">About</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Blogs</a></li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Programs</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark text-decoration-none">Lejhro Bootcamp</a></li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Support</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Terms of Use</a></li>
              <li><a href="#!" className="text-dark text-decoration-none">Privacy Statement</a></li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Connect with us</h5>
            <ul className="list-unstyled mb-0 ">
              <li className='me-4'><a href="#!" className="text-dark"><i class="fa-brands fa-twitter fa-lg"></i></a>
              <a href="#!" className="text-dark"><i class="fa-brands fa-square-facebook fa-lg"></i></a>
              <a href="#!" className="text-dark"><i class="fa-brands fa-linkedin fa-lg"></i></a>
              <a href="#!" className="text-dark"><i class="fa-brands fa-youtube fa-lg"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container> 
      <div className="text-center p-3 bg-white">
        © 2024 LEJHRO. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
