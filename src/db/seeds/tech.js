const tech = require("./tech.json");

exports.seed = (knex) => {
  return knex.raw("TRUNCATE TABLE tech RESTART IDENTITY CASCADE")
    .then(() => knex("tech").insert(tech));
};