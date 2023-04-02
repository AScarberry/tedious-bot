const config = require('rc')('agent');
module.exports.get = () => require('parse-strings-in-object')(config);