export default class CAS {
    
    constructor(authheader){
        this.base64 = authheader.split(' ')[1];   
    }

    authCAS(){
        let data = 'admin:admin';
        let buf = Buffer.from(data);
        let encodedData = buf.toString('base64');
        return encodedData;
    }

    convertBase64(data){
        let auth = new Buffer.from(data, 'base64').toString().split(':');
        return auth;
    }

    Equals(base64){
        return base64 == this.base64
    }
    
}