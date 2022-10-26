
import {ServerHttp} from '../server/index.js'
let _server = undefined

export class Application {
    constructor(){
        console.clear();
        _server = new ServerHttp();
    }

    serverCreate(){
        _server.createServer();
    }
}
