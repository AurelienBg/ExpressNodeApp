var express = require('express');

var app = express();

app.get('/about',function(req,res){
	res.send('<h1>About Us</h1>');
});

app.get('/about/:title',function(req,res){
	res.send('<h1>'+res.params.title+'</h1>'});
});

app.get('/*',function(req,res){
	res.send('<h1>Welcome!</h1>');
});

console.log('server started on localhost:3000');
app.listen(3000);