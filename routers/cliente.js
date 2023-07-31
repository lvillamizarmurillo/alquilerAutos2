import appmiddlewareCliente from '../middleware/middlewareCliente.js';
import {Router} from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appCliente = Router();

let con = undefined;
appCliente.use((req,res,next)=>{
   try {
        let config_con = JSON.parse(process.env.MY_CONECTION);
        con = mysql.createPool(config_con);
        next();
   } catch (error) {
        res.status(404).send("Couldn't connect to "+con);
   } 
});


appCliente.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT * FROM Cliente `, (error,data)=>{
            if(error){
                console.log(error);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else{
                console.log(data);
                res.status(200).send(data);
            }
    });
});

appCliente.get("/dni", appmiddlewareCliente, (req, res) => {
    const { DNI} = req.body;
    con.query(
        `SELECT * FROM Cliente WHERE DNI = ?`,
        [ DNI],(err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else if(data.length === 0){
                res.status(500).send("Error: el dato no existe en la tabla buscada");
            }else{
                console.log(data);
                res.status(200).send(data);
            }
    });
});

export default appCliente;