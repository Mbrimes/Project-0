const config = require('config');
exports.db = () => config.get('mongoURI');