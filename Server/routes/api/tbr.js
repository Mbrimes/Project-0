const controller = require('../../controllers/tbr'); 
const { authJwt } = require("../../middleware");

module.exports = function(app) {
app.get('/', [authJwt.verifyToken], controller.tbrPosts);
app.post('/', [authJwt.verifyToken], controller.createTbrPost);
app.delete('/', [authJwt.verifyToken], controller.deleteTbrBook);
};