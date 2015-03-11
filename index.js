var fs = require('fs');

module.exports = fs.readFileSync('./SOWPODS.txt').toString().split('\n');
