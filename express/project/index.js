const express = require("express");
const PORT = 3000;

const app = express();
const adminRouter = require("./adminRouter");
const userRoute = require("./userRoute");

app.use("/admin", adminRouter);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app runnign on port ${PORT}`);
});
