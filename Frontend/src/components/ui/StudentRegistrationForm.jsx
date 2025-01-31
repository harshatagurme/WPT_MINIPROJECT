import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useState } from "react";
import { saveStudent } from "../../services/StudentService";
import { ToastNotification } from "../library/ToastNotification";
import { NavigationBar } from "./NavigationBar";

export function StudentRegistrationForm() {

    const [formData, setFormData] = useState({  rollno: "", firstname: "", lastname: "",phone: "", });

    const [showToast, setShowToast] = useState(false);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        saveStudent(formData)
            .then((response) => {
                setShowToast(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
    
        <Container>
            <Header title="Register a student now" description="This is form to add a student" />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>RollNo</Form.Label>
                                <Form.Control type="text" placeholder="Enter Rollno" name="rollno" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="firstname" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" placeholder="Enter Lastname" name="lastname" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Register Student</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <ToastNotification 
                background="success" 
                show={showToast} 
                message="Student registered" 
                onClose={handleCloseToast}  
            />
            {/* <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Student registered</Toast.Body>
                </Toast>
            </ToastContainer> */}

        </Container>
        </>
    )
}