
exports.up = function(knex) {
  return knex.schema.createTable("projects_tech", table => {
    table.integer("project_id").unsigned().notNullable();
    table.foreign("project_id").references("id").inTable("projects").onDelete("CASCADE");
    table.integer("tech_id").unsigned().notNullable();
    table.foreign("tech_id").references("id").inTable("tech").onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("projects_tech");
};
