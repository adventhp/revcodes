const CODES = require("../revcodes.json");

function formatCode(code) {
  let formatted = code.toString();
  while (formatted.length < 4) {
    formatted = "0" + formatted;
  }
  return formatted;
}

exports.getAll = function() {
  return Object.keys(CODES).map(key => CODES[ key ]);
};

exports.getOne = function(id) {
  const code = formatCode(id);
  return CODES[ code ];
};

exports.getMany = function(ids) {
  return ids.map(getOne);
};