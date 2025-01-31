import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchAllStudents } from "../services/StudentService";

export function AttendanceList() {
  const [students, setStudents] = useState([]);

  const [showModal,setShowModal] = useState(false);

  const [selectedStudentId, setSelectedStudentId] = useState(0);

  // const closeModal = ()=>{
  //        setShowModal(false);
  // }
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
        title={"ATTENDANCE"}
        description={"Here you can see student attendance list"}
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
                    <Button variant="success">Present</Button> 
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="danger">Absent</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      {/* <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure you want to remove {selectedStudentId}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" >
            yes
          </Button>
          <Button variant="danger" >
            no
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Container>
  );
}
