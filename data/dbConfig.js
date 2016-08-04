var knexConfig = require('../knexfile').development;
var knex = require('knex')(knexConfig);


function getUser(user) {
  return knex('users').where('username', user.username);
}

function insertUser(user) {
  return knex('users').insert({username: user.username});
}

// function getCatById(catId) {
//   var id = catId.id;
//   console.log(id);
//   return knex('cats').where('id', id);
// }

function logError(err) {
  console.error(err.message);
  res.status(500).send("Can't display cats!");
}


module.exports = {
  getUser: getUser,
  insertUser: insertUser,
  logError: logError
};
