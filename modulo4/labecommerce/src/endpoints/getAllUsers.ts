import { Request, Response } from "express";
import connection from '../data/connections';
import {user} from "../types"

export async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const result = await connection("labecommerce_users")

        const users = result.map(toUsers)

        res.status(200).send(users)
    
    }catch(error){
        res.status(500).send("Internal server error")
    }    
}

const toUsers = (input: any): user => {
     return {
         id: input.id,
         name: input.name,
         email: input.email,
         password: input.password
     }
}