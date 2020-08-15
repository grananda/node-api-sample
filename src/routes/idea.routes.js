const { Router } = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/", IdeaController.get);
  router.get("/:id", [ParseIntMiddleware], IdeaController.getAll);
  router.get("/:id/all", IdeaController.getUserIdeas);
  router.post("/:id/upvoteIdea", IdeaController.upvoteIdea);
  router.post("/:id/downvoteIdea", IdeaController.downvoteIdea);
  router.post("/:id", IdeaController.create);
  router.patch("/:id", IdeaController.update);
  router.delete("/:id", IdeaController.delete);

  return router;
};
