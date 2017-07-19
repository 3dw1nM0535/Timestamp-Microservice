var express = require('express');

var app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage!");
});

app.get("/error", (req, res) => {
  res.send("This is the Error page!");
})

app.listen(3000);