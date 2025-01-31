// src/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export function Footer () {
  return (
    <footer className="bg-light text-black py-4 text-center align-center">
      <Container>
        <Row>
            
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={6} className="text-center text-black text-md-right">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-black mr-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            
            <a href="https://www.twitter.com" className="text-black mr-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="text-black mr-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" className="text-black">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


