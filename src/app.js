const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("This is a test route");
});

app.use("/hello", (req, res) => {
  res.send("This is a test route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
