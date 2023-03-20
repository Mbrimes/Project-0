const config = require('Server');
const db = config.get('mongoURI');

module.exports = {db};