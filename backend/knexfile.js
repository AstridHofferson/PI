module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './source/database/databank.sqlite'
    },
    migrations: {
      directory: './source/database/migrations'
    },
    seeds: {
      directory: './source/database/seeds'
    },
    useNullAsDefault: true,
  }
}