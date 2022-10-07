import express from 'express';
import body from 'body-parser';
import { ControllerHome } from './controllers/home.js';

const app = express();
const port = process.env.port || 3000;
const home = undefined;
export class ServerHttp{

    constructor(){
        console.log('server rodando ...');
        app.use(body.json());
        home = new ControllerHome();
    }

    routers(url){
        app.get(url, home.index(req, res));
    }

    createServer(){ 
        this.routers('/api');
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api`));
    }

}