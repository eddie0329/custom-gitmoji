"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const HOOK = {
  PERMISSIONS: 0o775,
  PATH: '/hooks/prepare-commit-msg',
  CONTENTS: '#!/bin/sh\n# gitmoji as a commit hook\n' + 'exec < /dev/tty\ngitmoji --hook $1\n'
};
var _default = HOOK;
exports.default = _default;