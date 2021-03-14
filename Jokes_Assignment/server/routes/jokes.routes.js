const UserController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", UserController.getAllJokes);
  app.get("/api/jokes/:id", UserController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", UserController.updateExistingJoke);
  app.post("/api/jokes/new", UserController.createJoke);
  app.delete("/api/jokes/delete/:id", UserController.deleteAnExistingJoke);
};