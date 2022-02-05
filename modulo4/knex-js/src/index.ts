import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {Request, Response} from 'express';

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

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

app.get('/actor', async (req: Request, res: Response): Promise<void> => {
    try{
        const result = await connection.raw('SELECT * FROM actor WHERE name LIKE "%on%')
        res.status(200).send({message: result[0]})
    }catch(error: any){
        res.status(500).send({message: error.message})   
    }
})

app.get('/actor/:id', async (req: Request, res: Response): Promise<void> => {
    try{
        const resultado = await connection('Actor').where({id: req.params.id})
        res.status(200).send({message: resultado[0]});
    }
    catch (error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get('/actor/:name', async (req: Request, res: Response): Promise<void> => {
    try{
        const resultado = await connection('Actor').where({id: req.params.name})
        res.status(200).send({message: resultado[0]});
    }
    catch (error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post('/actor', async (req: Request, res: Response) => {
    try{
        await connection('Actor').insert({
            id: Date.now().toString(),
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        })
        res.status(201).send('Insertion sucessful');
    }
    catch (error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})