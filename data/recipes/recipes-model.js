const db = require('../dbConfig.js');

// user-model
module.exports = {
  getAllRecipes() {
    // select
    //   p.id,
    //   u.username,
    //   p.contents
    // from users u
    // join posts p
    //   on p.user_id = u.id
    // where u.id = 1;
    return db('recipes')
      .select()
  }
}
