const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var issues = require('./issues.json');

app.set('port', (process.env.PORT || 7000));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

function myCustomFunction(req, res){
  console.log('I am really coming from a function');
    res.json(issues);
}

app.get('/', function(req, res){
  res.send('Helooooo');
});

app.get('/api/issues', myCustomFunction);

app.post('/api/issues', function(req,res){
  res.send('Sorry bro, no time is left')
})

var server = app.listen(app.get('port'), function(){
  console.log('Server is running on port ' + app.get('port'));
});
