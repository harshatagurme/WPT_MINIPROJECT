import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStudentById, updateStudent } from "../../services/StudentService";
import { STUDENTS_LIST_ROUTE } from "../../constants/AppRoute";
import { NavigationBar } from "./NavigationBar";

export function StudentEditForm() {
    const params = useParams();

    const navigate = useNavigate();

    const [student, setStudent] = useState({ rollno: '', firstname: '', lastname: '', phone: '' });

    const getStudentById = async () => {
        const response = await fetchStudentById(params.id);
        if (response.status === 200) {
            setStudent(response.data);
        }
    }

    useEffect(() => {
        getStudentById();
    }, []);

    const handleFieldChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(student);
        const response = await updateStudent(student);
        console.log(response.message);
        if (response.status === 200) {
          navigate(STUDENTS_LIST_ROUTE);  
        }
        else{
            // error handling
        }
    }

    return (

        <>
        <Container>
            <Header title="Edit the student data" />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>RollNo</Form.Label>
                                <Form.Control type="text" placeholder="Roll No Cant be changed" name="rollno" value={student.rollno} onChange={handleFieldChange} readOnly />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" placeholder="Enter FirstName" name="firstname" value={student.firstname} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" placeholder="Enter LastName" name="lastname" value={student.lastname} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" name="phone" value={student.phone} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Update Student</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
        </>
    )
}