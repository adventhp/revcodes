const CODES = require("./revcodes.json");

function getAll() {
  return Object.keys(CODES).map(key => CODES[key]);
};

function getOne(id) {
  return CODES[id];
}
function getMany(ids) {
  return ids.map(getOne);
}

module.export = {
  getAll: getAll,
  getMany: getMany,
  getOne: getOne
};
