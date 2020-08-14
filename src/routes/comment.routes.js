const { Router } = require("express");

module.exports = function ({ CommentController }) {
  const router = Router();

  router.get("/", CommentController.get);
  router.get("/:id/ideas", CommentController.getIdeasComments);
  router.post("/:id", CommentController.create);
  router.patch("/:id", CommentController.update);
  router.delete("/:id", CommentController.delete);

  return router;
};
