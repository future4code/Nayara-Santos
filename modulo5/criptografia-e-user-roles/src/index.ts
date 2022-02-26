import express from "express";
import { AddressInfo } from "net";
import {Request, Response} from 'express'

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.post("/signup", async (req: Request, res: Response) => {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password
      };
    
      const id = generate();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword);
  
      const token = generateToken({
        id
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/login", async (req: Request, res: Response) => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const user = await getUserByEmail(userData.email);
  
      const comapreResult = await compare(
        userData.password,
        user.password
      );
  
      if (!compareResult) {
        throw new Error("Invalid password");
      }
  
      const token = generateToken({
        id: user.id    
          });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });