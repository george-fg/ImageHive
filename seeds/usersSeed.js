
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'Ahmed'}),
        knex('users').insert({username: 'Hudson'}),
        knex('users').insert({username: 'George'}),
        knex('users').insert({username: 'James'})
      ]);
    });
};
