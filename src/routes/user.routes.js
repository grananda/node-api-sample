const { Router } = require("express");
const { AuthMiddleWare } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:id", UserController.get);
  router.get("/", [AuthMiddleWare], UserController.getAll);
  router.patch("/:id", UserController.update);
  router.delete("/:id", UserController.delete);

  return router;
};
