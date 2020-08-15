let _ideaService = null;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(req, res) {
    const { id } = req.params;

    const entity = await _ideaService.get(id);

    return res.send(entity);
  }

  async getAll(req, res) {
    const entities = await _ideaService.getAll();

    return res.send(entities);
  }

  async create(req, res) {
    const { body } = req;

    const entity = _ideaService.create(body);

    return res.status(201).send(entity);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;

    const entity = await _ideaService.update(id, body);

    return res.send(entity);
  }

  async delete(req, res) {
    const { id } = req.params;

    const response = await _ideaService.delete(id);

    return res.send(response);
  }

  async getUserIdeas() {
    const { id } = req.params;

    const entities = await _ideaService.getUserIdeas(id);

    return res.send(entities);
  }

  async upvoteIdea(req, res) {
    const { id } = req.params;

    const entity = await _ideaService.upvoteIdea(id);

    return res.send(entity);
  }

  async downvoteIdea(req, res) {
    const { id } = req.params;

    const entity = await _ideaService.downvoteIdea(id);

    return res.send(entity);
  }
}

module.exports = IdeaController;
