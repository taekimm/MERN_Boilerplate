const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

// connecting mongoose
// mongoose.connect("*MONGODB PATH HERE");

let models_path = path.join(__dirname, "../models/");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    require(path.join(models_path, file));
  }
});
