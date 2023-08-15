// const express = require('express');
// const controller = require('../../controllers/posts');
// const { authJwt } = require("../../middleware");

// const router = express.Router();

// router.get('/', [authJwt.verifyToken], controller.readingPosts);
// router.post('/', [authJwt.verifyToken], controller.createreadingPost);
// router.patch('/:id', [authJwt.verifyToken], controller.updatePost);
// router.delete('/:id', [authJwt.verifyToken], controller.deletePost);
// module.exports = router; 

const controller = require('../../controllers/posts'); 
const { authJwt } = require("../../middleware");

module.exports = function(app){
    app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    app.get("/api/posts", [authJwt.verifyToken], controller.readingPosts);
    app.post("/api/posts", [authJwt.verifyToken], controller.createreadingPost);
    app.patch("/api/posts/:id", [authJwt.verifyToken], controller.updatePost);
    app.delete("/api/posts/:id", [authJwt.verifyToken], controller.deletePost);
 };