const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbs = {};

dbs.mongoose = mongoose;

dbs.user = require("./user.model");
dbs.role = require("./role.model");

dbs.ROLES = "user";

module.exports = dbs;