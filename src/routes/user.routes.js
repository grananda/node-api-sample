const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/", UserController.get);
  router.get("/:id", UserController.getAll);
  router.patch("/:id", UserController.update);
  router.delete("/:id", UserController.delete);

  return router;
};
