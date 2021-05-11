const projects_tech = require("./projects_tech.json");

exports.seed = (knex) => {
  return knex.raw("TRUNCATE TABLE projects_tech RESTART IDENTITY CASCADE")
    .then(() => knex("projects_tech").insert(projects_tech));
};