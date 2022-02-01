import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from '../src/routes/user.route';

export class App {
    private express: express.Application;
    private porta: 3003;

    constructor() {
        this.express = express();
        this.porta = 3003;
        this.listen();
        this.middlewares();
        this.database();
        this.routes();
    }

    public getApp(): express.Application{
        return this.express;
    }

    private middlewares(): void{
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void{
        this.express.listen(this.porta, () => {
            console.log('Servidor iniciado na porta' + this.porta);
        });
    }

    private database(): void{
        mongoose.connect(''), ({
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }

    private routes(): void{
        this.express.use('/usuarios', userRoute);
    }
}