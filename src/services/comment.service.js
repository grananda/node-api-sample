const BaseService = require("./base.service");
let _commentRepository = null,
  _idesRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _idesRepository = IdeaRepository;
  }

  async getIdeaComments(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "ID must be provided";

      throw error;
    }

    const idea = await _ideaRepository.get(id);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea not found";

      throw error;
    }

    const { comments } = idea;

    return comments;
  }

  async createComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "Idea ID must be provided";

      throw error;
    }

    const idea = await _ideaRepository.get(id);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea not found";

      throw error;
    }

    const createdComment = await _commentRepository.create(comment);
    idea.comment.push(createdComment);

    return await _idesRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
