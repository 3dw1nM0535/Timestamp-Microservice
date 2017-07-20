var express = require('express');

var app = express();

//Views Middleware
app.set('views', './Views');
app.set('view engine', 'ejs');

//Public folder assets Middleware
app.use(express.static('Public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:date', (req, res) => {
  var num = Number(req.params.date);
  if (isNaN(num)) {
    var time = Date.parse(req.params.date);
  }
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening on port....");
});