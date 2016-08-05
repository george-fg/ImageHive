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

function editPost (obj, newObj){
  console.log("this is the object to change: ", obj);
  console.log("this is the object with proposed changes: ", newObj);
  return getPostById(obj.id)
    .update({
      users_username: newObj.username,
      imgUrl: newObj.image.substring(0, newObj.image.length-1),
      caption: newObj.caption
    })
 }

function logError(err) {
  console.error(err.message);
  res.status(500).send("Can't display what you were looking for!");
}


module.exports = {
  getUser: getUser,
  insertUser: insertUser,
  logError: logError,
  insertPost: insertPost,
  getPosts: getPosts,
  getPostById: getPostById,
  editPost: editPost
};
