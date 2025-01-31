import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveStudent } from "../services/StudentService";

export function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    rollno: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleFieldChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseToast = () => {
    setShowToast(false);
}

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(formData);
    saveStudent(formData)

    .then((response)=>{
      console.log(response.data.message);
       alert(response.data.message);  
    })
    .catch((error)=>{
        console.log(error);
    });
  };
  return (
    <Container>
      <Header
        title={"Register a student now"}
        description={"This is form to add a student"}
      ></Header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Id"
                  name="id"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone"
                  name="phone"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Marks"
                  name="marks"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Button type="submit" variant="primary">{" Register Student"}</Button>
            </Col>
          </Row>
        </Form>
      <Row>
        <Col lg={4}>
        
        </Col>
      </Row>
      </Container>
      
    </Container>
  );
}
