const actions = require("../actions/user.actions");

module.exports = app => {
  app.get("/api/users", actions.get);
  app.get("/api/users/:id", actions.getOne);
  app.post("/api/users", actions.post);
  app.put("/api/users/:id", actions.put);
  app.delete("/api/users/:id", actions.delete);
};
