const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// Routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// Controllers
const { HomeController } = require("../controllers");

// Services
const { HomeService } = require("../services");

// Models
const { User, Comment, Idea } = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  });

module.exports = container;
