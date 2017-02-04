// notes: how do I get that data from my form. Use a post request.
// CRUD for express.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//wait list objects. And current reservations:

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var wait = [{
	customerName: "steve becherer",
	phoneNumber: "618-777-3333",
	customerEmail: "becherers7@gmail.com",
	customerID: "1234"
	}, {
	customerName: "Marcus Andersh",
	phoneNumber: "710-999-3892",
	customerEmail: "mandersh@gmail.com",
	customerID: "2345",
	}
	];

var table = [{
		tableName: "Table 1"
	},
	{
		tableName: "table 2"
	},
	{
		tableName: "table 3"
	},
	{
		tableName: "table 4"
	},
	{
		tableName: "table 5"
	}
	];

app.get("/", function(req, res) {
  // res.send("Welcome to the home page!")
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve.html", function(req, res) {
  // res.send("Welcome to the home page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables.html", function(req, res) {
  // res.send("Welcome to the home page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/wait", function(req, res){
	var waitList = req.wait;
	res.json(wait);
});
app.get("/api/table", function(req, res) {
	res.json(table);
});
//new comment
app.post("/api/wait", function(req, res) {

	var newWait = req.body;

	console.log(newWait);

	wait.push(newWait);

	res.json(newWait);

});

app.post("/api/table", function(req, res) {

	var newTable = req.body;

	console.log(newTable);

	table.push(newTable);

	res.json(newTable);

});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// var wait = [{

// }]

// var currentRes = [{

// }]

// var waitList = function (name, phone, email, id){
// 	this.name = name;
// 	this.phone = phone;
// 	this.email = email;
// 	this.id = id;
// }

// var new 



// //current Constructor