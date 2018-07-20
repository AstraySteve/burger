var connection = require("./connections");

//object constructor for sql statement
class Orm{
    constructor(tablename){
        this.connection = connection;
        this.tablename = tablename;
    }
    selectAll(cb){
        //Select all from database
        var query = `SELECT * FROM ${this.tablename}`
        this.connection.query(query,(err,data)=>{
            if(err){
                throw err;
            }
            cb(data);
        });
    }

    insertOne(model, cb){
        //Insert to database
        var keys=[];
        var values = [];
        Object.keys(model).forEach(x=>{
            keys.push(x);
            values.push(model[x]);
        });
        var questionMarks = keys.map(x => "?")
        var query = `INSERT INTO ${this.tableName} (${keys}) VALUES (${questionMarks})`;
        
        //console.log(query);
        this.connection.query(query,values,(err,data)=>{
            if (err){
                console.log(err);
                return false;
            }
            cb(data);
        })

    }

    updateOne(model, cb){
        //update column
        var columns = [];
        var values = [];
        var id;

        Object.keys(model).forEach(x=>{
            if(x === 'id'){
                id = model[x];
                return;
            }
            columns.push(`${x}=?`);
            value.push(model[x]);
        });
        value.push(id);
        var query = `UPDATE ${this.tableName} SET ${column} WHERE id = ${id}`;
        
        //console.log(query);
        this.connection.query(query, values, (err,data)=>{
            if(err){
                throw err;
            }
            cb(data);
        });
    }
}

module.exports = Orm;