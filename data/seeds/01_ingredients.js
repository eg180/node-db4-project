
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'tomato'},
        {ingredient_name: 'pepperoni'},
        {ingredient_name: 'lettuce'},
        {ingredient_name: 'beef'},
        {ingredient_name: 'onion'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'cheese'}
      ]);
    });
};
