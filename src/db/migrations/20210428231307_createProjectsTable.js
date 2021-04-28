
exports.up = function(knex) {
  return knex.schema.createTable("projects", table => {
    table.increments("id").primary().unsigned().notNullable();
    table.string("name");
    table.string("image_url");
    table.text("description");
    table.string("github_link");
    table.string("live_link");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("projects");
};
