import express from 'express';
import body from 'body-parser';
import ControllerHome from './controllers/home.js';
import MiddleAutentication from '../middleware/autentication.js';
import router from './routes/router.js';

const app = express();
const port = process.env.port || 3000;

export default class ServerHttp {

    constructor(){
        console.log('server rodando ...');
        this.autentic = new MiddleAutentication();
        this.home = new ControllerHome();
    }

    middleware(){
        app.use(body.json());
        app.use(this.autentic.Autentication);
    }

    routers(){
        app.use('/api/v1', router);
    }

    createServer(){ 
        this.middleware();
        this.routers();        
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api`));
    }

}