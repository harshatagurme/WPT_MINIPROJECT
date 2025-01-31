import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchAllStudents } from "../services/StudentService";

export function EditList() {
  const [students, setStudents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedStudentId, setSelectedStudentId] = useState(0);

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    const response = await fetchAllStudents();
    setStudents(response.data);
  };

  return (
    <Container>
      <Header
        title={"EDIT"}
        description={"Here you can edit student attendance list"}
      ></Header>
      <Container className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              return (
                <tr>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.marks}</td>
                  <td>{s.phone}</td>
                  <td>
                    <Button variant="success">Edit</Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="danger" onClick={()=>{
                        setShowModal(true);
                        setSelectedStudentId(s.id);
                    }}>Delete</Button>
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are You Sure You Want To Delete {selectedStudentId}? </Modal.Body>
        <Modal.Footer>
          <Button variant="success">yes</Button>
          <Button variant="danger">No</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
