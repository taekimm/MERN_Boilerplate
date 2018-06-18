let controller = require("../controller/controller.js");

module.exports = app => {
  // enter routes here. [Format is app.<get/post/delete>('url', callback (method name in controller) )]
  app.get('/api/test', controller.test);
};
