const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/main", function (req, res) {
  res.send(
    " <h1>Express</h1> Express is a framework and It is the most popular Node web framework.It provides a robust set of features to develop web and mobile applications.Express helps rapid development of Node based Web applications."
  );
});
app.listen("4000", () => {
  console.log("connected");
});
