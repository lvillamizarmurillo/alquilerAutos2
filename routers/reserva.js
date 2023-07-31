import appmiddlewareReserva from '../middleware/middlewareReserva.js';
import {Router} from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appReserva = Router();

let con = undefined;
appReserva.use((req,res,next)=>{
   try {
        let config_con = JSON.parse(process.env.MY_CONECTION);
        con = mysql.createPool(config_con);
        next();
   } catch (error) {
        res.status(404).send("Couldn't connect to "+con);
   } 
});


appReserva.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT v.Nombre,v.Apellido,v.DNI,v.Telefono,d.Marca,d.Modelo,d.Anio,c.Estado FROM Reserva c INNER JOIN Cliente v ON v.ID_Cliente = c.ID_Cliente INNER JOIN Automovil d ON d.ID_Automovil = c.ID_Automovil WHERE Estado = ?`,["Pendiente"], (err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else{
                console.log(data);
                res.status(200).send(data);
            }
    });
});


export default appReserva;