import { STUDENT_TABLE_NAME } from "../constants/DbConstants.js";
import { connection } from "../utility/DbUtil.js";
import moment from "moment";

export const fetchStudents = (req,res)=>{
    const qry=`select * from ${STUDENT_TABLE_NAME}`;
    connection.query(qry,(error,results)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send(results);
        }
    });
}


export const saveStudent = (req,res)=>{
    const {rollno,firstname,lastname,phone} = req.body;
    // array 
    const qry = `insert into ${STUDENT_TABLE_NAME} values(${rollno},'${firstname}','${lastname}','${phone}');`
    connection.query(qry,(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            console.log(result);
            res.status(200).send({message:'Student Inserted'});
        }
    });
}


export const fetchStudentById = (req,res)=>{
    const qry = `select * from ${STUDENT_TABLE_NAME} where rollno=${req.params.id}`;
    connection.query(qry,(error,result)=>{
        if (error) {
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            if (result.length == 0) {
                res.status(404).send({message:'Student not found'});
            }
            else{
                res.status(200).send(result[0]);
            }
            
        }
    });
}


export const removeStudent = (req,res) => {
    const qry = `delete from ${STUDENT_TABLE_NAME} where rollno=${req.params.id}`;
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send({message:'Student removed !'});
        }
    });
}

export const updateStudent = (req,res) => {
    const {firstname,lastname,phone} = req.body;
    console.log(req.body);
    const qry = `update ${STUDENT_TABLE_NAME} set firstname='${firstname}', lastname='${lastname}', phone='${phone}' where rollno=${req.params.id}`
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send({message:'Student updated !'});
        }
    });
}

export const setAttendance = (req,res) => {
    const {date,rollno,state} = req.body;
    // const body = req.body;
    
    const qry = `insert into att values('${date}',${rollno},'${state}')`
    // const qry = `insert into att values('${req.params.date}',${req.params.rollno},'${req.params.state}')`
    connection.query(qry,(error,result)=>{
        if(error){
            console.log("abc");
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            console.log("abc");
            res.status(200).send({message:'Student updated !'});
        }
    });
}


export const getAttendanceByDate = (req,res) => {
    const date = req.params.date;
    console.log(date);
    
    
    const qry = `select date,att.rollno,firstname,lastname,state from att join student on att.rollno=student.rollno where date='${date}';`
   
    connection.query(qry,(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            // res.status(200).send(result);
            const formattedResults = result.map((student) => {
                return {
                  ...student,
                  date : moment(student.date).format('YYYY-MM-DD')
                };
              });
            res.send(formattedResults);
        }
    });
}

export const getAttendanceByStudent = (req,res) => {
    const rollno = req.params.rollno;
    console.log(rollno);
    
    
    const qry = `select date,att.rollno,firstname,lastname,state from att join student on att.rollno=student.rollno where att.rollno='${rollno}';`
   
    connection.query(qry,(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            // res.status(200).send(result);
            const formattedResults = result.map((student) => {
                return {
                  ...student,
                  date : moment(student.date).format('YYYY-MM-DD')
                };
              });
            res.send(formattedResults);
        }
    });
}



// CRUD Create, Read, Update, Delete