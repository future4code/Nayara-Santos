import e, {Request, Response} from 'express';
import connection from '../data/connections';
import Authenticator from '../services/Authenticator'

export default async function login (
    req: Request,
    res: Response
): Promise<void> {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password' ")
        }

        const [user] = await connection("list_users").where({email})

        if(!user || user.password !== password) {
            res.statusCode = 401
            res.statusMessage = 'Credenciais invalidas'
            throw new Error()
        }

        const token = new Authenticator().generateToken({id: user.id})
        res.status(200).send({token})
    
    }catch (error){
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else{
            res.send({message: error.sqlMessage || error.message})
        }
    }
}