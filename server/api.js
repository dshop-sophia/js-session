const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 7000));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

var server = app.listen(app.get('port'), function(){
  console.log('Server is running on port ' + app.get('port'));
});
