const { Router } = require("express");
const { AuthMiddleWare, ParseIntMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:id", UserController.get);
  router.get("/", [AuthMiddleWare, ParseIntMiddleware], UserController.getAll);
  router.patch("/:id", UserController.update);
  router.delete("/:id", UserController.delete);

  return router;
};
