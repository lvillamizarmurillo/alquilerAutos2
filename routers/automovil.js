import appmiddlewareAutomovil from '../middleware/middlewareAutomovil.js';
import {Router} from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appAutomovil = Router();

let con = undefined;
appAutomovil.use((req,res,next)=>{
   try {
        let config_con = JSON.parse(process.env.MY_CONECTION);
        con = mysql.createPool(config_con);
        next();
   } catch (error) {
        res.status(404).send("Couldn't connect to "+con);
   } 
});


appAutomovil.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT Marca,Modelo,Anio,Tipo,Capacidad,Precio_Diario FROM Automovil INNER JOIN Alquiler ON Automovil.ID_Automovil = Alquiler.ID_Automovil WHERE Estado = ?`,["Disponible"], (err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else{
                console.log(err);
                res.status(200).send(data);
            }
    });
});


export default appAutomovil;