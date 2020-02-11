/**
 * Introduction to Human-Computer Interaction
 * Lab 2
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require("express");
var path = require("path");
var handlebars = require("express3-handlebars");

var index = require("./routes/index");
var home = require("./routes/home");
var friends = require("./routes/friends");
var create = require("./routes/create");
var notification = require("./routes/notification");
var profile = require("./routes/profile");
var friend = require("./routes/friend");

// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());

// all environment
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.static(path.join(__dirname, "public")));

// all routes
app.get("/", index.view);
app.get("/home", home.view);
app.get("/friends", friends.list);
app.get("/friends/:friend", friend.list);
app.get("/create", create.createEvent);
app.get("/notification", notification.list);
app.get("/profile", profile.view);

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
  console.log("Node.js server running on port %s", port);
});
