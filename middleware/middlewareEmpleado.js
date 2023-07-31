import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageEmpleado} from "../controller/storageEmpleado.js"
import {validate} from 'class-validator';

const appmiddlewareEmpleado = express();
appmiddlewareEmpleado.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageEmpleado, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareEmpleado;