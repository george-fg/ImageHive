var knexConfig = require('../knexfile').development;
var knex = require('knex')(knexConfig);


function getUser(username) {
  return knex('users').where('username', username);
}

function insertUser(username) {
  return knex('users').insert({username: username});
}

function insertPost(post) {
  return knex('posts').insert(post)
}

function logError(err) {
  console.error(err.message);
  res.status(500).send("Can't display cats!");
}


module.exports = {
  getUser: getUser,
  insertUser: insertUser,
  logError: logError,
  insertPost: insertPost
};
