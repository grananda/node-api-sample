const { Router } = require("express");
const {
  AuthMiddleWare,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:id", UserController.get);
  router.get(
    "/",
    [AuthMiddleWare, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    UserController.getAll
  );
  router.patch("/:id", UserController.update);
  router.delete("/:id", UserController.delete);

  return router;
};
