const { ExpectationFailed } = require("http-errors");
const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("server", () => {
  beforeAll(() => {
    return knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest())
      .then(console.log);
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  it("GET /projects returns a list of projects", async () => {
    const response = await request(app).get("/projects");
    expect(response.status).toEqual(200);
    expect(response.body.error).toBeUndefined();
    expect(response.body.data.length).toEqual(2);
  });

});