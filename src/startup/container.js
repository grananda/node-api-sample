const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// Routes
const {
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// Controllers
const {
  HomeController,
  UserController,
  IdeaController,
  CommentController,
  AuthController,
} = require("../controllers");

// Services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
  AuthService,
} = require("../services");

// Models
const { User, Comment, Idea } = require("../models");

// Repositories
const {
  UserRepository,
  CommentRepository,
  IdeaRepository,
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
