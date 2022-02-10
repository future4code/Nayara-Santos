import {Request, Response} from 'express';
import {getAddressInfo} from "../services/getAddressInfo"

export const createUser = async (req: Request, res: Response) => {
    try{

        const {email, password, cep} = req.body

        const address = await getAddressInfo(cep)
        if(!address){
           throw new Error("Deu error no servico getAddressInfo")
        }
       res.send({address})
    }catch (error) { 
        if (error instanceof Error) {
           res.send({error, message: error.message})
        }else{ 
            res.send({message: "Erro inesperado"})  
        }  
    }
    
}