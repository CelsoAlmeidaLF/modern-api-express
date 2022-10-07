
import {Application} from './application.js'

class Program extends Application {

    constructor(){
        super()
    }

    main(){
        this.serverCreate();
    }
}

let prog = new Program();
prog.main();