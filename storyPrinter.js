var express = require('express');

// Creates the express app
var app = express();

//Determines to port the app is going to listen on
var port = process.env.PORT || 3000;

//Set up default routers for html and api
var htmlRouter = express.Router();
var apiRouter = express.Router();

var config = require('./config')

//User the routers at their default locations
app.use('/', htmlRouter);
app.use('/api', apiRouter);

//gives access to static files via the public directory
app.use(express.static( __dirname + '/public'));

htmlRouter.get('/', function(req,res){
  res.sendfile('index.html');
});

// debugging
apiRouter.get('/', function(req, res){
  res.json({message: 'You win'});
});


apiRouter.get('/getStories/', function(req, res){
  var query = strRight(req.url, '?');
  var request = require('request'),
  // config import
  username = config.username,
  password = config.password,
  url = config.url + query,
  auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  console.log('sending request'+ url);
  // creates HTTP request with headers containing authentication info to query jira API endpoint
  request(
  {
    url : url,
    headers : {
      "Authorization" : auth
    }
  },
    // API call
    function (error, response, body) {
      res.json(body);
      console.log('response sent');
    }
 );
});

app.listen(port, function () {
  console.log('Server listening  on port ' + port);
});

function strRight(target, seperator){
  //stringValue
  var pos = target.indexOf(seperator);
  var result = target.substring(pos+1,target.length)
  return result;
}
