const config = require('./default.js');
const db = config.get('mongoURI');

module.exports = {db};