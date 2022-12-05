//  node test.js getAll
//  node test.js getOne=A1
//  node test.js getMany=a1,a2,a3

var test = require("../src/index.js");
var result = "";

process.argv.forEach((val, index) => {
  var parts = val.split('=');
  var func = parts[0];
  var params = null;
  if (parts.length > 1) {
    params = parts[1];
  }

  switch (func) {
    case 'getAll':
      result = test.getAll();
      break;
    case 'getOne':
      result = test.getOne(params);
      break;
    case 'getMany':
      result = test.getMany(params.split(','));
      break;
  }
});

console.log(result);