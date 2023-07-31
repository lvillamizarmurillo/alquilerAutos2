import appmiddlewareAlquileres from '../middleware/middlewareAlquileres.js';
import {Router} from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appAlquileres = Router();

let con = undefined;
appAlquileres.use((req,res,next)=>{
   try {
        let config_con = JSON.parse(process.env.MY_CONECTION);
        con = mysql.createPool(config_con);
        next();
   } catch (error) {
        res.status(404).send("Couldn't connect to "+con);
   } 
});


appAlquileres.get("/",(req, res) => {
    con.query(
        /*sql*/`SELECT Nombre,Apellido,DNI,Telefono,Email,Estado,ID_Alquiler,Costo_Total FROM Cliente INNER JOIN Alquiler ON Cliente.ID_Cliente = Alquiler.ID_Cliente WHERE Estado = ?`,["Activo"], (err,data)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el servidor: "+err.sqlMessage);
            }else{
                res.status(200).send(data);
            }
    });
});


export default appAlquileres;