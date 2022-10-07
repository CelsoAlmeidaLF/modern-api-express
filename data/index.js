
const sqlite3 = require('sqlite3').verbose();
const {open} = require('sqlite');

exports.Data = class {

   Open(){
        return open({
            filename: './data/database.db',
            driver: sqlite3.Database
        });
    }

    GetAll(sql){
        return this.Open().then(db => {
            return db.all(sql).then();
        });
    }

    RunCommand(sql){
        this.Open().then(db => {
            db.run(sql);
        });
    }

    ExecCommand(sql){
        this.Open().then(db => {
            db.exec(sql);
        });
    }
}