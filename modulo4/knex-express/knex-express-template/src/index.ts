import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {Request, Response} from 'express';
import connection from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get('/user', async (req: Request, res: Response): Promise<void> => {
   
    try{
      await connection("user").insert({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email
      })  
        res.status(201).send('Insertion sucessful');
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)    
    }
});

app.get('/user/:id', async (req: Request, res: Response): Promise<void> => {
    try{
        const resultado = await connection("user").where({id: req.params.id})
        res.status(200).send({message: resultado[0]})
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message) 
    }
});
