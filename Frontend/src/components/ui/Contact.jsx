// src/ContactUs.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { NavigationBar } from './NavigationBar';

export function Contact () {
  const handleClick = () => {
    window.open('https://www.instagram.com/ajit.tet.war/', '_blank');
  };
  return (
    <>
    <Container className="mt-5">
    <h1 className="text-center mb-4">Contact Us</h1>
    <Form onSubmit={handleClick}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>

      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject" required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  </>
  )
};


