import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageCliente} from "../controller/storageCliente.js"
import {validate} from 'class-validator';

const appmiddlewareCliente = express();
appmiddlewareCliente.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageCliente, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareCliente;