import { Container } from "react-bootstrap";
import { Header } from "../library/Header";
import { NavigationBar } from "./NavigationBar";

export function Home(){
    return (
        <>
        <Container>
            <Header title="Welcome to student management application" description="" />
            <Container className="text-center">
            <h1>Attendance Tracking System</h1>
<h4>Overview</h4>
<p style={{backgroundColor:"aquamarine"}}>The Attendance Tracking System is a comprehensive web application designed to facilitate the management and tracking of student attendance in educational institutions. It aims to improve accuracy, efficiency, and accessibility of attendance records for both teachers and students. This system leverages modern web technologies to provide a user-friendly and robust platform for attendance management
</p>   
</Container>  </Container></>
    )
}