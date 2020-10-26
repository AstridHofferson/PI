exports.up = function(knex) {
    return knex.schema.createTable('rate', function (table) {
        table.increments('id').primary();
        table.number('note').notNullable();
        table.date('avaliation.date').notNullable();
        table.text('comentary').notNullable();
        table.integer('user_id').unsigned()
        table.integer('book_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.foreign('book_id').references('books.id')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rate');
};