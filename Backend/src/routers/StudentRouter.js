import express from "express";
import { fetchStudentById, fetchStudents, getAttendanceByDate, getAttendanceByStudent, removeStudent, saveStudent, setAttendance, updateStudent } from "../controllers/StudentController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const studentRouter = express.Router();

studentRouter.get('/',fetchStudents);
studentRouter.post('/',saveStudent);
studentRouter.get('/:id',fetchStudentById);
studentRouter.delete('/:id',removeStudent);
studentRouter.put('/:id',updateStudent);
studentRouter.post('/att',setAttendance);//:rollno/:date/:state
studentRouter.get('/att/:date',getAttendanceByDate);
studentRouter.get('/att/student/:rollno',getAttendanceByStudent);
//studentRouter.put('/att/:date',setAttendance);//:rollno/:date/:state

export default studentRouter;