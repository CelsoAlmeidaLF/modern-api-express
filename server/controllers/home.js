import { format } from 'date-fns';
import {v4} from 'uuid';
import {Business} from '../../app/business.js'

const uui = v4

export class ControllerHome {

    index(req, res){

            let bll = new Business();
            let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`
            let result = bll.Get(req.body.User);

            let api = {
                id:uui(),
                dtCriação:date,
                body:req.body.User,  
                mensagem:result, 
                status:200
            }

            res.json(api).status(200)
        }
}