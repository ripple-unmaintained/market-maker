var fs = require('fs');

var modFile = fs.readFileSync(__dirname+'/module.js');

var contents = modFile.toString().replace(/\n/gi, '');
console.log(contents);

var Person = eval(contents);

console.log('Person', Person);

