import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
    ABOUT_ROUTE,
  ATTENDANCE_LIST_BY_DATE_ROUTE,
  ATTENDANCE_LIST_BY_STUDENT_ROUTE,
  ATTENDANCE_LIST_ROUTE,
  BASE_ROUTE,
  CONTACT_ROUTE,
  REGISTRATION_ROUTE,
  STUDENTS_LIST_ROUTE,
  STUDENT_HOME_ROUTE,
} from "../../constants/AppRoute";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { removeToken } from "../../services/AdminService";

export function NavigationBar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        removeToken();
        navigate(BASE_ROUTE);}
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ATTENDANCE TRACKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={STUDENT_HOME_ROUTE}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to={REGISTRATION_ROUTE}>
              <Nav.Link>Register Student</Nav.Link>
            </LinkContainer>

            <LinkContainer to={STUDENTS_LIST_ROUTE}>
              <Nav.Link>Students List</Nav.Link>
            </LinkContainer>

            <LinkContainer to={ATTENDANCE_LIST_ROUTE}>
              <Nav.Link>Get Attendance</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to={ATTENDANCE_LIST_BY_DATE_ROUTE}>
              <Nav.Link>Show Attendance By Date</Nav.Link>
            </LinkContainer> */}

            {/* <LinkContainer to={ATTENDANCE_LIST_BY_STUDENT_ROUTE}>
              <Nav.Link>Show Attendance By Student</Nav.Link>
            </LinkContainer> */}

                        <NavDropdown title="Fetch Attendance" id="basic-nav-dropdown">
                         <NavDropdown.Item >
                            <Link to="/attendance-by-student">Attendance By Student</Link></NavDropdown.Item>
                        <NavDropdown.Item > <Link to="/attendance-by-date">Attendance By Date</Link></NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        </NavDropdown>

            <LinkContainer to={ABOUT_ROUTE}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to={CONTACT_ROUTE}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" onClick={handleLogout}>Logout</Button>
      </Container>
    </Navbar>
  );
}
