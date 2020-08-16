let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { id } = req.params;

    const entity = await _userService.get(id);

    return res.send(entity.toJson());
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const entities = await _userService.getAll(pageSize, pageNum);

    return res.send(entities);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;

    const entity = await _userService.update(id, body);

    return res.send(entity.toJson());
  }

  async delete(req, res) {
    const { id } = req.params;

    const response = await _userService.delete(id);

    return res.send(response);
  }
}

module.exports = UserController;
