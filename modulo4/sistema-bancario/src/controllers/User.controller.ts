import {Request, Response} from 'express';
import usuarioModel from '../models/user.model';

class UserController {
    public async cadastrar(req: Request, res: Response): Promise<Response> {
        const usuario = await usuarioModel.create(req.body);
        return res.json(usuario);
    }

}

export default new UserController();