const { Router } = require("express");
const { AuthMiddleWare } = require("../middlewares");

module.exports = function ({ CommentController }) {
  const router = Router();

  router.get("/", CommentController.get);
  router.get("/:id/idea", CommentController.getIdeasComments);
  router.post("/:id", AuthMiddleWare, CommentController.create);
  router.patch("/:id", AuthMiddleWare, CommentController.update);
  router.delete("/:id", AuthMiddleWare, CommentController.delete);

  return router;
};
