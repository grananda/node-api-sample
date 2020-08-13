const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor(UserRepository) {
    super(UserRepository);
  }

  async getUserByUsername(username) {
    if (!username) {
      const error = new Error();
      error.status = 400;
      error.message = "Username must be provided";

      throw error;
    }

    return await this._userRepository.getUserByUsername(username);
  }
}

module.exports = UserService;
