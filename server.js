const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-material-login-template'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'angular-material-login-template', 'src/index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
