const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(methodOverride());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/routes.js')(app);
app.listen(port, err => {
  if (err) {
    return console.log('something went wrong', err);
  }

  console.log(`server listening on ${port}`);
});
