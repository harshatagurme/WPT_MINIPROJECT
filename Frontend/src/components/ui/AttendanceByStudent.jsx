import { useEffect, useState } from "react";
import { getDataByDate, getDataByRollNo } from "../../services/StudentService";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { NavigationBar } from "./NavigationBar";

export function AttendanceByStudent(){
    const[studentData,setStudentData] = useState([]);
    const[rollno,setRollno]=useState('0');

    const [rollNo, setRollNo] = useState('');
    
    useEffect(() => {
        getAttendanceByStudent();
    }, [rollno]);
    
    

    const getAttendanceByStudent = async (e) => {
        
        
        const response = await getDataByRollNo(rollno);
        
       
        setStudentData(response.data);
        
    }


    const handle=(e)=>{
        console.log(e);

        setRollno(e.target.value);
        
        
      }


      const handleInputChange = (e) => {
        e.preventDefault();
        setRollNo(e.target.value);
      };
      

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Roll Number:', rollNo);
        setRollno(rollNo); // Process the input value (e.g., send it to an API)
      };


    return(
        <>
        <Container>
        <Header title="Attendance by Student" description="Here you can view attendance by RollNo" />
       {/* <Form onSubmit={handle}>
        <span>   Enter RollNo here   </span><input type="text" id="date" name="rollno"  />
        <Button type="submit" variant="success">Select Date</Button>
        </Form> */}

<Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="rollNo">
          <Form.Label>Enter RollNo here</Form.Label>
          <Form.Control
            type="text"
            name="rollno"
            value={rollNo}
            onChange={handleInputChange}
            placeholder="Enter RollNo"
          />
        </Form.Group>
        <Button type="submit" variant="success">Submit</Button>
      </Form>
    </Container>


        <Container className="mt-4">
            {
                studentData.length === 0 ?
                    <Alert variant="danger">No Data Exists</Alert>
                    :
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>RollNo</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentData.map((s) => {
                                    return (
                                        <tr>
                                            <td>{s.date}</td>
                                            <td>{s.rollno}</td>
                                            <td>{s.firstname}</td>
                                            <td>{s.lastname}</td>
                                            <td>{s.state}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
            }

        </Container>
        </Container>
        </>
    )
}