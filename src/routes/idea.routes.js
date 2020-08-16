const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleWare } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/:id", ParseIntMiddleware, IdeaController.get);
  router.get("/", IdeaController.getAll);
  router.get("/:id/all", IdeaController.getUserIdeas);
  router.post("/:id/upvoteIdea", AuthMiddleWare, IdeaController.upvoteIdea);
  router.post("/:id/downvoteIdea", AuthMiddleWare, IdeaController.downvoteIdea);
  router.post("/", AuthMiddleWare, IdeaController.create);
  router.patch("/:id", IdeaController.update);
  router.delete("/:id", AuthMiddleWare, IdeaController.delete);

  return router;
};
