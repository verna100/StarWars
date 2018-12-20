// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});
// this code will return yoda because the path was specific. now if you use localhost:3000/yoda/whatever, it goes to the character code below. this code is specific to the /yoda
app.get("/yoda", function(req, res){
    res.send("you chose yoda!")
});
// this code takes anything that's not the above /, for example if you got localhost:3000/whatever. it falls under this parameter
app.get("/:character", function(req, res) {
  var chosen = req.params.character;

  // What does this log?
  console.log(chosen);

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
