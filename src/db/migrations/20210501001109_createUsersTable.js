
exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary().unsigned().notNullable();
    table.string("username");
    table.string("password");
    table.boolean("is_admin");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
