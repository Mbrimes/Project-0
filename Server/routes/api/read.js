const controller = require('../../controllers/readposts');  
const { authJwt } = require("../../middleware");

module.exports = function(app){
	app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
	app.get("/api/read", [authJwt.verifyToken], controller.readPosts);
	app.post("/api/read", [authJwt.verifyToken], controller.createReadPost);
	app.delete("/api/read/:id", [authJwt.verifyToken], controller.deleteReadBook);
};