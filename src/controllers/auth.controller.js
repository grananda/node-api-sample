let _authservice = null;

class AuthController {
  constructor({ AuthService }) {
    _authservice = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;

    const entity = await _authservice.signUp(body);

    return res.status(201).send(entity);
  }

  async signIn(req, res) {
    const { body } = req;

    const credentials = await _authservice.signIn(body);

    return res.send(credentials);
  }
}

module.exports = AuthController;
