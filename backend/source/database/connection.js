// const knex = require('knex');
// const configuration = require('../../knexfile');

// const connection = knex(configuration.development);

// module.exports = connection;

async function init() {
    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mr280503',
        database: 'pi'
    });

    // connection.connect((err) => {
    //   if (err) throw err;
    //   console.log('Connected!');
    // });
    return connection;
}

module.exports = init();