const { JwtHelper } = require("../helpers");
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;

    const entity = await _userService.getUserByUsername(username);
    if (entity) {
      const error = new Error();
      error.status = 401;
      error.message = "User already exist";
      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;

    const entity = await _userService.getUserByUsername(username);
    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const validaPassword = entity.comparePasswords(password);
    if (!validaPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid password";
      throw error;
    }

    const userToEncode = {
      username: entity.username,
      id: entity._id,
    };

    const token = JwtHelper.generateToken(entity);

    return {
      token: token,
      user: entity,
    };
  }
}

module.exports = AuthService;
