import { Alert, Card, CardBody, Col, Container, Row } from "react-bootstrap";
// import { Header } from "./Header";

import swapnaliImage from '../assets/images/swapnali.jpeg';
import harshitaImage from '../assets/images/harshata.jpeg';
import ajitImage from '../assets/images/ajit.jpeg';
import { NavigationBar } from "./NavigationBar";

export function About(){
    return(
      <>
      <Container className="mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ajitImage} />
            <Card.Body>
              <Card.Title>AJIT TETWAR</Card.Title>
              <Card.Text>Team Member</Card.Text>
              <Card.Text>Contributing to the project goals objectives</Card.Text>
              <Card.Text>Phone : +91 79727 47775</Card.Text>
              <Card.Text>Email :</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={harshitaImage} />
            <Card.Body>
              <Card.Title>HARSHATA GURME</Card.Title>
              <Card.Text>Team Member</Card.Text>
              <Card.Text>Contributing to the project goals objectives</Card.Text>
              <Card.Text>Phone : +91 70382 83778</Card.Text>
              <Card.Text>Email :</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={swapnaliImage} />
            <Card.Body>
              <Card.Title>SWAPNALI PATIL</Card.Title>
              <Card.Text>Team Member</Card.Text>
              <Card.Text>Contributing to the project goals objectives</Card.Text>
              <Card.Text>Phone : +91 93702 73446 </Card.Text>
              <Card.Text>Email :</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    )
}