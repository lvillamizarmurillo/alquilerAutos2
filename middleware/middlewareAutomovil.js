import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageAutomovil} from "../controller/storageAutomovil.js"
import {validate} from 'class-validator';

const appmiddlewareAutomovil = express();
appmiddlewareAutomovil.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageAutomovil, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareAutomovil;

