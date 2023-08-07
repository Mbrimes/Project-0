// const express = require('express');
// const controller = require('../../controllers/tbr');
// const { authJwt } = require("../../middleware");

// const router = express.Router();

// router.get('/', [authJwt.verifyToken], controller.tbrPosts);
// router.post('/', [authJwt.verifyToken], controller.createTbrPost);
// router.delete('/', [authJwt.verifyToken], controller.deleteTbrBook);
// module.exports = router;

const controller = require('../../controllers/tbr'); 
const { authJwt } = require("../../middleware");

module.exports = function(app) {
	app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
	app.get('/', [authJwt.verifyToken], controller.tbrPosts);
	app.post('/', [authJwt.verifyToken], controller.createTbrPost);
	app.delete('/', [authJwt.verifyToken], controller.deleteTbrBook);
};