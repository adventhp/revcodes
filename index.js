const CODES = require("./revcodes.json");

exports.getAll = function() {
  return Object.keys(CODES).map(key => CODES[key]);
};

function getOne(id) {
  return CODES[id];
}
function getMany(ids) {
  return ids.map(getOne);
}

module.export = {
  getMany: getMany,
  getOne: getOne
};
