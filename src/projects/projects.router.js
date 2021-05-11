const router = require("express").Router();
const controller = require("./projects.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:projectId").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;