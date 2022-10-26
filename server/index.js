import express from 'express';
import body from 'body-parser';
import ControllerHome from './controllers/home.js';

const app = express();
const port = process.env.port || 3000;

export class ServerHttp{

    constructor(){
        console.log('server rodando ...');
        this.home = new ControllerHome();
    }

    middleware(){
        app.use(body.json());
    }

    routers(){
        app.get('/api/v1', this.home.index);
    }

    createServer(){ 
        this.middleware();
        this.routers();        
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api`));
    }

}