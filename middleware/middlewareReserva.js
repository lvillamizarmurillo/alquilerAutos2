import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageReserva} from "../controller/storageReserva.js"
import {validate} from 'class-validator';

const appmiddlewareReserva = express();
appmiddlewareReserva.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageReserva, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareReserva;