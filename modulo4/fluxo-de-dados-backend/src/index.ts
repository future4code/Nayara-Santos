import express, {Request, Response} from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:3003/test`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


app.get('/test', (req: Request, res: Response) => {
   res.status(200).send('API está funcionando.')
})
