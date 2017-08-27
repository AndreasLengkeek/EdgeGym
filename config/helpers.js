const path = require('path');

/**
 * Applies root path to directory or file
 */
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat('../', ...args));
}
exports.root = root;
