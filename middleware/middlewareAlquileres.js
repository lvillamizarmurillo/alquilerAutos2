import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageAlquileres} from "../controller/storageAlquileres.js"
import {validate} from 'class-validator';

const appmiddlewareAlquileres = express();
appmiddlewareAlquileres.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageAlquileres, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareAlquileres;