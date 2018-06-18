const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// import models from models folder
// const Player = mongoose.model("Player");

module.exports = {
  // format is [methodname (same as route): (request, response) => { }]
  test: (req, res) => {
    return res.json({test: 'test'})
  }
}