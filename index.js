var fs = require('fs');

module.exports = fs.readFileSync(__dirname + '/SOWPODS.txt').toString().split('\n');
