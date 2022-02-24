import express from "express";
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import login from './endpoints/login'

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

app.post('/users/signup', createUser)
app.post('/users/login', login)