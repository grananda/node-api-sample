const { UserRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { User } = require("../../../src/models");
let {
  UserModelMock: { users, user },
} = require("../../mocks");

describe("User Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a user by ID", async () => {
    // Given
    const _user = { ...user };
    delete _user.password;

    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });

    // When
    const expected = await _userRepository.get(_user._id);

    // Then
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should find a user by username", async () => {
    // Given
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });

    // When
    const expected = await _userRepository.getUserByUsername(_user.username);

    // Then
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should return a user collection", async () => {
    // Given
    users = users.map((user) => {
      delete user.password;
      return user;
    });

    mockingoose(User).toReturn(users, "find");

    const _userRepository = new UserRepository({ User });

    // When
    const expected = await _userRepository.getAll();

    // Then
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users);
  });

  it("Should update an especific user by id", async () => {
    // When
    const _user = { ...user };
    delete _user.password;

    mockingoose(User).toReturn(_user, "findOneAndUpdate");

    const _userRepository = new UserRepository({ User });

    // When
    const expected = await _userRepository.update(user._id, {
      name: "Marluan",
    });

    // Then
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should delete an especific user by id", async () => {
    // Given
    mockingoose(User).toReturn(user, "findOneAndDelete");

    const _userRepository = new UserRepository({ User });

    // When
    const expected = await _userRepository.delete(user._id);

    // Then
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
