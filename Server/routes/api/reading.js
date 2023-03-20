const controller = require('../../controllers/posts'); 
const { authJwt } = require("../../middleware");

module.exports = function(app){
app.get('/api/test/red',  controller.readingPosts);
app.post('/', [authJwt.verifyToken], controller.createreadingPost);
app.patch('/:id', [authJwt.verifyToken], controller.updatePost);
app.delete('/:id', [authJwt.verifyToken], controller.deletePost);
 };