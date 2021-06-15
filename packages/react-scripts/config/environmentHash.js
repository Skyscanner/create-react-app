'use strict';

const fs = require('fs');
const path = require('path');

const reactScriptsRoot = path.resolve(__dirname, '..');
const haveIsolatedDependencies =
  fs.existsSync(path.join(reactScriptsRoot, 'package-lock.json')) ||
  fs.existsSync(path.join(reactScriptsRoot, 'yarn.lock'));

module.exports = {
  root: haveIsolatedDependencies ? reactScriptsRoot : process.cwd(),
  directories: [],
  files: ['package-lock.json', 'yarn.lock'],
};
