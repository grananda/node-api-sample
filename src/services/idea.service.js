const BaseService = require("./base.service");
let _ideaRepository = null;

class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
  }

  async getUserIdeas(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "Author must be provided";

      throw error;
    }

    return await this.repository.getUserIdeas(author);
  }

  async upvoteIdea(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "ID must be provided";

      throw error;
    }

    const idea = await this.repository.get(id);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea not found";

      throw error;
    }

    idea.upvotes.push(true);

    return await this.repository.update(id, { upvotes: idea.upvotes });
  }

  async downvoteIdea(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "ID must be provided";

      throw error;
    }

    const idea = await this.repository.get(id);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea not found";

      throw error;
    }

    idea.upvotes.push(false);

    return await this.repository.update(id, { upvotes: idea.upvotes });
  }
}

module.exports = IdeaService;
