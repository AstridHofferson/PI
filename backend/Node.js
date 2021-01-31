const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mr280503',
  database: 'pi'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});