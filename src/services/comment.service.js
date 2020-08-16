const BaseService = require("./base.service");
let _ideaRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _ideaRepository = IdeaRepository;
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

  async createComment(comment, ideaId, userId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "Idea ID must be provided";

      throw error;
    }

    if (!userId) {
      const error = new Error();
      error.status = 400;
      error.message = "User ID must be provided";

      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea not found";

      throw error;
    }

    const createdComment = await this.repository.create({
      ...comment,
      author: userId,
    });
    idea.comments.push(createdComment);

    return await _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
