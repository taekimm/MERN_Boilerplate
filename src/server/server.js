const express = require("express");
const app = express();
const server = require("http").Server(app);
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// webpack stuff
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../../webpack.config");

// static assets
app.use(express.static(path.join(__dirname, "/../../public")));

// using bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using CORS
app.use(cors());

require("./config/mongoose.js");
require("./config/routes.js")(app);

// catchall route to send out HTML w/ bundle.js
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../public/index.html"));
});

// setting up port
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

