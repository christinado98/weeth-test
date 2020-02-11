var friends = require("../data/friends");

exports.view = function(req, res) {
  res.render("home", friends);
};
