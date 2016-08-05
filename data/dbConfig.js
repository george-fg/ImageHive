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

function getPosts() {
  return knex('posts')
}

function getPostById(id){
  return knex('posts').where('id', id)
}

function logError(err) {
  console.error(err.message);
  res.status(500).send("Can't display cats!");
}

function editPost (obj, newObj){
  return getPostById(obj.id)
    .update({
      users_username: newObj.username,
      imgUrl: newObj.image.substring(0, newObj.image.length-1),
      caption: newObj.caption
    });
 }

function deletePostById(id) {
  return knex('posts')
    .where('id', id)
    .del();
}


module.exports = {
  getUser: getUser,
  insertUser: insertUser,
  logError: logError,
  insertPost: insertPost,
  getPosts: getPosts,
  getPostById: getPostById,
  editPost: editPost,
  deletePostById: deletePostById
};
