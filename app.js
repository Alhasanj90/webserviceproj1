var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();

var config = require('./config');

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//add route for the root
app.get('/',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});

//create routing object
var player = require('./api/players/index');

//Add routes for players api
app.get('/api/players',player.index);
app.post('/api/players',player.create);
app.put('/api/players/:id',player.update);
app.delete('/api/players/:id',player.delete);


// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(config.port, config.host)
// Put a friendly message on the terminal
console.log("Server running at " + config.port+":"+  config.host );