import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, REGISTRATION_ROUTE, ATTENDANCE_LIST_ROUTE,ABOUT_ROUTE,CONTACT_ROUTE,LOGIN_ROUTE,SIGN_UP_ROUTE, VIEW_ROUTE, EDIT_LIST_ROUTE, VIEW_LIST, VIEW_LIST_ROUTE } from "../constants/AppRoute";

export function NavigationBar(){
return(

  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">ATTENDENCE APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

    
      <LinkContainer to={BASE_ROUTE}>
        <Nav.Link>HOME</Nav.Link>
        </LinkContainer>
        
        <LinkContainer to={ABOUT_ROUTE}>
        <Nav.Link>ABOUT US</Nav.Link>
        </LinkContainer>
       
       <LinkContainer to={CONTACT_ROUTE}>
       <Nav.Link>CONTACT US</Nav.Link>
       </LinkContainer>

       <LinkContainer to={REGISTRATION_ROUTE}>
       <Nav.Link>STUDENT REGISTRATION</Nav.Link>
       </LinkContainer>
         
     <LinkContainer to={ATTENDANCE_LIST_ROUTE}>
     <Nav.Link>ATTENDANCE LIST</Nav.Link>
     </LinkContainer>

     <LinkContainer to={VIEW_ROUTE}>
     <Nav.Link>VIEW LIST</Nav.Link>
     </LinkContainer>

     <LinkContainer to={EDIT_LIST_ROUTE}>
     <Nav.Link>EDIT LIST</Nav.Link>
     </LinkContainer>
          
     <LinkContainer to={LOGIN_ROUTE}>
        <Nav.Link>LOGIN</Nav.Link>
        </LinkContainer>

        <LinkContainer to={SIGN_UP_ROUTE}>
        <Nav.Link>SIGN UP</Nav.Link>
        </LinkContainer>

        <LinkContainer to={VIEW_LIST_ROUTE}>
        <Nav.Link>VIEW </Nav.Link>
        </LinkContainer>

             

      </Nav>
    </Navbar.Collapse>
 </Container>


</Navbar>
);

}