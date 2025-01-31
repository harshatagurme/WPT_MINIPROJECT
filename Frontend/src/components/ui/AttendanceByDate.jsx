import { useEffect, useState } from "react";
import { getDataByDate } from "../../services/StudentService";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { NavigationBar } from "./NavigationBar";

export function AttendanceByDate(){
    const[studentData,setStudentData] = useState([]);
    const[date,setDate]=useState('2020-2-2');
    
    useEffect(() => {
        getStudentByDate();
    },[date]);
    
    

    const getStudentByDate = async (e) => {
        
        
        const response = await getDataByDate(date);
        
       
        setStudentData(response.data);
        
    }
const dddd = (e)=>{

}

    const handle=(e)=>{
e.preventDefault();
        setDate(e.target.value);
        
        
      }


    return(
        <>
        <Container>
        <Header title="Attendance by Date" description="Here you can view attendance by date" />
       <Form >
        <input type="date" id="date" name="date"  onChange={handle}/>
        {/* <Button type="submit" variant="success">Select Date</Button> */}
        </Form>
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