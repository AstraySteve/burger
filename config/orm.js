var connection = require("./connections");

//object for sql statement
Orm =(tablename)=>{
    this.connection = connection;
    this.tablename = tablename;

    this.selectAll = function(){
        //selectAll()
        var query = `SELECT * FROM ${this.tablename}`;
        this.connection.query(query,(err,data)=>{
            if(err){
                console.log(error);
                return false;
            }
            return data; //note: maybe use callback if design needs it
        })
    }

    this.insertOne = function(){
        //insertOne()
    }

    this.updateOne = function(){
        //updateOne()
    }
}

module.exports = Orm;