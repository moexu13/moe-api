const knex = require("../db/connection");
const tableName = "projects";

const list = () => {
  return knex(tableName).select("*");
}

const read = (projectId) => {
  return knex(tableName).select("*").where("id", projectId);
}

const create = (newProject) => {
  return knex(tableName).insert(newProject, "*")
    .then((createdRecords => createdRecords[0]));
}

module.exports = {
  list,
  read,
  create,
}