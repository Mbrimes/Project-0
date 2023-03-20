const config = require('./default');
const db = config.get('mongoURI');

module.exports = db;