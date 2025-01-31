import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { useEffect, useState } from "react";
import { fetchAllStudents } from "../../services/StudentService";


export function AttendanceList() {
  const [students, setStudents] = useState([]);
  const [aten,setAten]= useState({date:" ",rollno:" ",state:" "});

 

  const handle=(e)=>{

    setAten(
    { 
       ...aten,
      [e.target.name]:e.target.value
    })
  }

// const handleSubmit=(e)=>{
// e.preventDefault();
// console.log(aten);

// }

  // const updateAten =(a)=>{
  //   setAten({...aten,rollno:a});
  //   console.log(aten);


  // };

  
  // const [isDisabled, setIsDisabled] = useState(false);

  // const handleClick = () => {
  //     setIsDisabled(true);
  // };

//   const [showModal, setShowModal] = useState(false);

//   const [selectedStudentId, setSelectedStudentId] = useState(0);
// // 
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
        
      <input type="date" id="date" name="date"  onChange={handle}/>
    
     
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              return (
                <tr>
                  <td>{s.rollno}</td>
                  <td>{s.firstname}</td>

                  <td>
                    {/* <Input  variant="success">Present</Button> 
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="danger">Absent</Button> */}
                    <Form onSubmit={(e)=>{
  
e.preventDefault();

console.log(aten);

}}>
                      
                      <div>
                          <Form.Check // prettier-ignore
                            type='radio'
                            id='p'
                            label='present'
                            name="state"
                            value='p'
                      onChange={(e)=>{
                        setAten({ ...aten,state:e.target.value,rollno:s.rollno})
                      
                      
                    
                      
                      }}
                          />

                          <Form.Check
                            type='radio'
                            label='absent'
                            id='a'
                            name="state"
                            value='a'
                            
                            onChange={(e)=>{
                              setAten({ ...aten,state:e.target.value,rollno:s.rollno})
                            
                            
                          
                            
                            }}
                          />
                        </div>
                        <div>
                        <Button variant="primary" type="submit" >Submit</Button>
            {/* <button onClick={handleClick} disabled={isDisabled}>
                {isDisabled ? "Clicked!" : "Click Me!"}
            </button> */}

{/* 
onClick={ setAten(
    { 
       ...aten,
      rollno:s.rollno
    })} */}
        </div>
                      
                    </Form>
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
