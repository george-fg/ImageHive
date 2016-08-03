
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/AAA_SVG_Chessboard_and_chess_pieces_06.svg', caption:'Why did I post a picture of a chess board?', users_username:'Hudson'}),
        knex('posts').insert({id: 2, imgUrl: 'https://cdn0.vox-cdn.com/thumbor/MWaDqZEzU_1BOfNArIaieaKtRho=/cdn0.vox-cdn.com/assets/4596501/SSB_Screenshot_1.jpg', caption:'Feel like playing super smash.', users_username:'Ahmed'}),
        knex('posts').insert({id: 3, imgUrl: 'https://static.pexels.com/photos/6347/coffee-cup-working-happy.jpg', caption: 'Check out this sweet happy coffee!', users_username:'Hudson'})
      ]);
    });
};
