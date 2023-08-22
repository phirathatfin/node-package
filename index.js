const express = require("express");

const app = express();

const lastUpdated = new Date();

app.get("/", (req, res) => {
  res.send({
    data: "Nodejs package versioning.",
    lastUpdated,
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
