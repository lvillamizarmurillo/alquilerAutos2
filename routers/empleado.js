import appmiddlewareEmpleado from '../middleware/middlewareEmpleado.js';
import {Router} from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appEmpleado = Router();

let con = undefined;
appEmpleado.use((req,res,next)=>{
   try {
        let config_con = JSON.parse(process.env.MY_CONECTION);
        con = mysql.createPool(config_con);
        next();
   } catch (error) {
        res.status(404).send("Couldn't connect to "+con);
   } 
});


appEmpleado.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT * FROM Empleado WHERE Cargo = ?`,["Vendedor"], (err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else{
                console.log(data);
                res.status(200).send(data);
            }
    });
});


export default appEmpleado;