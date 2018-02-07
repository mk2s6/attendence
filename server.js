var express = require('express');
var mysql = require('mysql');
var http = require('http');
var parser = require('body-parser');
var fs = require('fs');
var app = express();

var query;
//create a server object:

app.listen(8080, function () {
	console.log("server listning at 8080");
});

// app.get('/', function () {
// 	// res.send(res);
// 	console.log('page loading');
// });

app.use(express.static(__dirname));
app.use(parser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "mk2s",
  password: "kusumanjali",
  database : 'college'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.post('/addstudent' , function (req, res) {
	console.log(req.body);
	query = con.query('INSERT INTO students SET ?', req.body , function (err , result) {
		if (err) {
			console.log('some error ' + err);
			res.send('query unsuccessfull');
		}
	})
	console.log('studentadded');
	res.send("success posting");

});