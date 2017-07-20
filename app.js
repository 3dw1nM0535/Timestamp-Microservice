var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send("Timestamp Microservice API");
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening on port....");
});