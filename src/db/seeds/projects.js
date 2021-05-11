const projects = require("./projects.json");

exports.seed = (knex) => {
  return knex.raw("TRUNCATE TABLE projects RESTART IDENTITY CASCADE")
    .then(() => knex("projects").insert(projects));
};