
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id')
          table.string('name', 128).notNullable()
      })
      .createTable('ingredients', table => {
          table.increments('ingredient_id')
          table.string('ingredient_name').notNullable()
      })
        
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

};
