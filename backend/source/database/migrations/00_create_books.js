exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('synopsis').notNullable();
    table.string('publicationDate').notNullable();
    table.string('author').notNullable();
    table.string('genre').notNullable();
    table.string('nationality').notNullable();
    table.string('originalTitle').notNullable();
    table.string('publisher').notNullable();
    table.string('price');
    table.integer('readingLevel');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};