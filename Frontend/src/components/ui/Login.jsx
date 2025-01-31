import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header.jsx";
import { useEffect, useState } from "react";
import  validation from './Validation.jsx'
import { adminLogin,getToken,storeToken } from "../../services/AdminService.js";
import { Navigate, useNavigate } from "react-router-dom";
import { SIGNUP_ROUTE, STUDENT_HOME_ROUTE } from "../../constants/AppRoute.js";
import { NavigationBar } from "./NavigationBar.jsx";



export function Login() {

    const[values,setValues]=useState({
        username:'',
        password:''
    })
    const[errors,setError]=useState({})

    const[loginError,setLoginError]=useState('');

    const navigate = useNavigate(); 
    useEffect(()=>{
        if (getToken()) {
           navigate(STUDENT_HOME_ROUTE) 
        }
    },[navigate])


    function handleChange(e)
    {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=> {
       e.preventDefault();
       setError(validation(values));
       try {
        const response = await adminLogin(values);
        console.log(response);
        if (response.status === 200) {
            storeToken(response.data.token);
            navigate(STUDENT_HOME_ROUTE);
        }
        } catch (error) {
        if (error.response.status === 400) {
            setLoginError(error.response.data.message);
        }
    }
}
    return (
        <>
        <Container style={{color:"black"}}>
            <Header title="Welcome to Student Management Application" description="Please login to continue" />
            <Container className="mt-5">
                <Form onSubmit={handleSubmit}>
                    <Row className="">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                                {errors.username && <p style={{color:"red", fontSize:"20px"}}>{errors.username}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                                {errors.password && <p style={{color:"red", fontSize:"20px"}}>{errors.password}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                   
                        <Col lg={4}>
                            <Button variant="primary" type="submit">Login</Button><span style={{color:"black",  fontSize:"20px"}}>.......New User?</span> <a style={{color:"blue",  fontSize:"25px"}} href="./sign_up" >sign up</a>
                        </Col>
                    
                    
                        <h6>.</h6>
                        
                        <Col lg={4}>
                            <Form>
                          
                           </Form>
                        </Col>
                    
                </Form>
                {
                    loginError.length !== 0 ?
                        <Row className="mt-3">
                            <Col lg={4}>
                                <Alert variant="danger">{loginError}</Alert>
                            </Col>
                        </Row> : null
                }

                </Container>
        </Container>
        </>
    )
}