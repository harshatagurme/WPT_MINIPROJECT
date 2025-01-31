import express from "express";
import { connection } from "./src/utility/DbUtil.js";
import studentRouter from "./src/routers/StudentRouter.js";
import adminRouter from "./src/routers/AdminRouter.js";
import { createConnection } from "mysql";
import cors from 'cors';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./src/constants/DbConstants.js";
const PORT = 6800;

const app = express();
app.use(cors());
app.use(express.json());
 app.use("/students",studentRouter);
app.use("/admins",adminRouter);


app.listen(PORT,()=>{
    const connection =   createConnection({host:DB_HOST,user:DB_USER,password:DB_PASSWORD,database:DB_NAME})
    connection.connect((error)=>{
      if(error){
       console.log("Error in DB Connection");
               console.log(error) 
      }
      else{
                   console.log("Database connected !");
               }
    });
    console.log(`Server running on port ${PORT}`);
       });