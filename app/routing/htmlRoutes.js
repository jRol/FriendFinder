var path = require("path");

module.exports = function(app) {
	// Route for survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};