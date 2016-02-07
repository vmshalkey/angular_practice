var express = require('express');

var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function() {
	console.log("listening on port 8000");

});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

// app.get('/users', function(req, res) {
// 	res.json({user: "mike"});
// });

// app.post('/users', function(req, res) {
// 	res.json({passed_info: "...hmmm how do we get parameters that are passed in...."});
// }):

// app.post('users/:name_of_passed_parameter', function(req, res) {
// 	res.json({name_of_passed_parameter:
// 		req.params.name_of_passed_parameter});

// })