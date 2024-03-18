const exprese = require("express");

const adminRouter = exprese.Router();

adminRouter.get("/", (req, res) => {
  res.send("admin home ");
});
adminRouter.get("/login", (req, res) => {
  res.send("admin login");
});

module.exports = adminRouter;
