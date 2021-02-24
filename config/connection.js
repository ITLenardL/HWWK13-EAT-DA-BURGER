// Set up MySQL connection.
const mysql = require('mysql');

let connection;

  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MYSQL123',
    database: 'burgers_db',
  });


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;