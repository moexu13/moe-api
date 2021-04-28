const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const projectsRouter = require("./projects/projects.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/projects", projectsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
