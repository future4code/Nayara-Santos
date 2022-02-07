import express from "express";
import { AddressInfo } from "net";
import axios from 'axios';
import { baseURL } from "./baseURL";
import getSubscribers1 from './index';
import user from './index';

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

//EXercicio - 1

async function getSubscribers1(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

//Exercicio - 2

const getSubscribers2 = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

//Exercicio - 3 

const getSubscribers3 = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
};

//Exercicio - 4

async function createNews(
    title: string,
    content: string,
    date: number
    ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
}

//Exercicio - 5

const sendNotifications1 = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
        } catch {
          console.log("Error");
    }
};

//Exercicio - 6

const sendNotifications2 = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };