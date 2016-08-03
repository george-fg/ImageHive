
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table) {
    table.string('username').primary()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
