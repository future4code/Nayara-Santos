import { Router } from "express";
import userController from "../controllers/User.controller";

const userRoute = Router();

userRoute.post('/cadastro', userController.cadastrar);

export default userRoute;
