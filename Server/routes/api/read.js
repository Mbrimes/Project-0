// const express = require('express');
// const controller = require('../../controllers/readposts');
// const { authJwt } = require("../../middleware");

// const router = express.Router();

// router.get('/api/read', [authJwt.verifyToken], controller.readPosts);
// router.post('/', [authJwt.verifyToken], controller.createReadPost);
// router.delete('/:id', [authJwt.verifyToken], controller.deleteReadBook);
// module.exports = router;

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
	app.get('/', [authJwt.verifyToken], controller.readPosts);
	app.post('/', [authJwt.verifyToken], controller.createReadPost);
	app.delete('/:id', [authJwt.verifyToken], controller.deleteReadBook);
};