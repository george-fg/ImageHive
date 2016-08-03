
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function(table) {
    table.increments('id')
    table.string('imgUrl')
    table.string('caption')
    table.string('users_username')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
