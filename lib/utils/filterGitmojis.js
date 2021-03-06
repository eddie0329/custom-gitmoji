"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.options = void 0;

var _fuse = _interopRequireDefault(require("fuse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  threshold: 0.5,
  keys: [{
    name: 'name',
    weight: 0.33
  }, {
    name: 'description',
    weight: 0.67
  }]
};
exports.options = options;

const filterGitmojis = (input, gitmojis) => {
  const fuse = new _fuse.default(gitmojis, options);
  return input ? fuse.search(input) : gitmojis;
};

var _default = filterGitmojis;
exports.default = _default;