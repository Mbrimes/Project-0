const controller = require('../../controllers/readposts'); 
const { authJwt } = require("../../middleware");

module.exports = function(app){
app.get('/', [authJwt.verifyToken], controller.readPosts);
app.post('/', [authJwt.verifyToken], controller.createReadPost);
app.delete('/:id', [authJwt.verifyToken], controller.deleteReadBook);
};