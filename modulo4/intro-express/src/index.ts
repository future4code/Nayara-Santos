import express from "express";

import { AddressInfo } from "net";

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

//Exercicio-1

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//Exercicio-2

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string 
}

//Exercicio-3

const User1 = {
    name: 'Nayara',
    idade: 18,
    apelido: 'Nay',
    musicaFav: 'Body - Summer Walker',
    corFav: 'Preto e Rosa'
}

//Exercicio-4

//fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //method: 'PUT',
  //body: JSON.stringify({
    //id: 1,
    //title: 'foo',
    //body: 'bar',
    //userId: 1,
  //}),
  //headers: {
    //'Content-type': 'application/json; charset=UTF-8',
//},
//})
  //.then((response) => response.json())
  //.then((json) => console.log(json));

//Exercicio-5

const Post = {
   id: 1,
   userId: 1,
   title: "Post 1",
   body: "Criando um novo post"
}

//Exercicio-6

//Exercicio-7

//Exercicio-8
 