let _commentService = null;

class CommentController {
  constructor(CommentService) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { id } = req.params;

    const entity = await _commentService.get(id);

    return res.send(entity);
  }

  async create(req, res) {
    const { body } = req;
    const { id } = req.params;

    const entity = _commentService.createComment(body, id);

    return res.status(201).send(entity);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;

    const entity = await _commentService.update(id, body);

    return res.send(entity);
  }

  async delete(req, res) {
    const { id } = req.params;

    const response = await _commentService.delete(id);

    return res.send(response);
  }

  async getIdeasComments(req, res) {
    const { id } = req.params;

    const entities = await _commentService.getIdeasComments(id);

    return res.send(entities);
  }
}

module.exports = CommentController;
