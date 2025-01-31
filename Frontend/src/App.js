import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT_ROUTE, ATTENDANCE_LIST_BY_DATE_ROUTE, ATTENDANCE_LIST_BY_STUDENT_ROUTE, ATTENDANCE_LIST_ROUTE, BASE_ROUTE, CONTACT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SIGNUP_ROUTE, STUDENTS_LIST_ROUTE, STUDENT_EDIT_ROUTE, STUDENT_HOME_ROUTE } from "./constants/AppRoute";
import { NavigationBar } from "./components/ui/NavigationBar";
import { Home } from "./components/ui/Home";
import { StudentRegistrationForm } from "./components/ui/StudentRegistrationForm";
import { StudentsList } from "./components/ui/StudentsList";
import { StudentEditForm } from "./components/ui/StudentEditForm";
import { AttendanceList } from "./components/ui/AttendanceList";
import { AttendanceByDate } from "./components/ui/AttendanceByDate";
import { AttendanceByStudent } from "./components/ui/AttendanceByStudent";
import { Contact } from "./components/ui/Contact";
import { About } from "./components/ui/About";
import { PrivateRoute } from "./components/library/PrivateRoute";
import { Login } from "./components/ui/Login";
import { SignUp } from "./components/ui/SignUp";
import { Footer } from "./components/ui/footer";
import { Container } from "react-bootstrap";
import image from "./abc.avif";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

function App() {
  return (
  <div style={{height:'1500px', backgroundImage: `url(${image}`, backgroundRepeat: 'no'}}>
    
    <BrowserRouter >
    
      <NavigationBar/>
      <Routes>
      <Route path={BASE_ROUTE} element={<Login/>} />
      <Route path={STUDENT_HOME_ROUTE} element={<Home/>} />
        <Route path={SIGNUP_ROUTE} element={<SignUp/>}/>
        <Route path={LOGIN_ROUTE} element={<Login/>} />
        <Route path={ABOUT_ROUTE} element = {<About/>}></Route>
        <Route path={CONTACT_ROUTE} element = {<Contact/>}></Route>
        
        <Route element={<PrivateRoute />}>
        <Route path={REGISTRATION_ROUTE} element={<StudentRegistrationForm/>} />
        <Route path={STUDENTS_LIST_ROUTE} element={<StudentsList/>} />
        <Route path={STUDENT_EDIT_ROUTE} element={<StudentEditForm/>} />
        <Route path={ATTENDANCE_LIST_ROUTE} element={<AttendanceList/>}/>
        <Route path={ATTENDANCE_LIST_BY_DATE_ROUTE} element={<AttendanceByDate/>}/>
        <Route path={ATTENDANCE_LIST_BY_STUDENT_ROUTE} element={<AttendanceByStudent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Container>
      <Footer/>
    </Container>
    
    </div>    
  );
}

export default App;
