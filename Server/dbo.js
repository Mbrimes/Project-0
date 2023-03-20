const config = require('config');
const db = config.get('mongoURI');

module.exports = db;