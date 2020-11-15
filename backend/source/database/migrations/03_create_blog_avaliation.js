exports.up = function(knex) {
    return knex.schema.createTable('blog_avaliation', function (table) {
        table.increments('id').primary();
        table.integer('blog_avaliation_note').notNullable();
        table.string('blog_avaliation_link').notNullable();
        table.integer('book_id').unsigned();
        table.foreign('book_id').references('books.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('blog_avaliation');
};