var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
   id: 1,
   description: 'Meet friend for lunch',
   completed: false
},{
   id: 2,
   description: 'Go to market',
   completed: false
},{
  id: 3,
  description: 'Zu Zindsu',
   completed: true
}]

app.get('/', function(req, res) {
   res.send('Todo API Root');
});

app.get('/todos', function(req, res){
   res.json(todos);
});

app.listen (PORT, function(){
   console.log('Express listening on port ' + PORT);
});