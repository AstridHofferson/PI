exports.up = function(knex) {
  return knex.schema.createTable('book_cover', table => {
    table.increments('id').primary();
    table.string('book_id')
      .notNullable()
      .references('id')
      .inTable('books');

    table.string('cover_id')
      .notNullable()
      .references('id')
      .inTable('covers');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('book_cover');
};