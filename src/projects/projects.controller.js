const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const projectExists = async (req, res, next) => {
  const { projectId } = req.params;
  const project = await service.read(projectId);

  if (project) {
    res.locals.project = project;
    return next();
  }
  next({ status: 404, message: `Project ${projectId} not found` });
}

const list = async (req, res) => {
  const methodName = "projects.list";
  const data = await service.list();
  req.log.debug({ __filename, methodName, projects });

  res.json({ data });
}

const read = (req, res) => {
  res.json({ data: res.locals.project });
}

const create = async (req, res) => {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(projectExists), read],
  create,
}