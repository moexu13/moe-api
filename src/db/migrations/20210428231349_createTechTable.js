
exports.up = function(knex) {
  return knex.schema.createTable("tech", table => {
    table.increments("id").primary().unsigned().notNullable();
    table.string("name");
    table.string("logo_url");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tech");
};
