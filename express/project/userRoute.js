const express = require("express");

const userRoute = express.Router();
// middleware
// const signUp = (req, res, next) => {
//   req.body = {
//     name: "joy",
//   };
//   next();
// };
// const log = (req, res, next) => {
//   console.log("Common middleware");
//   next();
// };

// // userRoute.all("*", log); call all time
// userRoute.use("/create", signUp);

// userRoute.param("id", (req, res, next, id) => {
//   console.log("id" + id);
//   req.id = id;
//   if (id === "1") {
//     console.log("User");
//   } else {
//     console.log("Error");
//   }
//   next();
// });
// userRoute.get("/", (req, res) => {
//   res.send("user home");
// });
// userRoute.get("/:id", (req, res) => {
//   console.log(`${req.id}`);
//   res.send(`user home ${req.id}`);
// });

// userRoute.get("/about", (req, res) => {
//   res.send("user about");
// });

// userRoute.post("/create", (req, res) => {
//   res.send(`User ${req.body.name} Create success `);
// });

userRoute
  .route("/user")
  .all((req, res, next) => {
    console.log("Global router");
    next();
  })
  .get(  (req, res) => {
    res.send("get all");
  })
  .post((req, res) => {
    res.send("Create user");
  });

module.exports = userRoute;
