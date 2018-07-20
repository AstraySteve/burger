var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DBHOST || "localhost", //127.0.0.1 ip address
    user: process.env.DBUSER || "root",
    password: process.env.DBPASSWORD || "root",
    port: 3306, //3306 default port, (optional unless you are using a different port)
    database: process.env.DB || "burgers_db",
    multipleStatements: true
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;