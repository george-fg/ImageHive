var config = require('./knexfile').development
var knex = require('knex')(config)

function posts(){
  return knex('posts')
    .select()
}

module.exports = {
  posts: posts
}
