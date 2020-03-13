// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');
// @remove-on-eject-begin
// Do the preflight check (only happens before eject).
const verifyPackageTree = require('./utils/verifyPackageTree');
if (process.env.SKIP_PREFLIGHT_CHECK !== 'true') {
  verifyPackageTree();
}
const verifyTypeScriptSetup = require('./utils/verifyTypeScriptSetup');
verifyTypeScriptSetup();
// @remove-on-eject-end

const path = require('path');
const fs = require('fs');
const configFactory = require('../config/webpack.config.ssr');
const { createCompiler } = require('react-dev-utils/WebpackDevServerUtils');
const webpack = require('webpack');

const paths = require('../config/paths');
const config = configFactory('development');
const appName = require(paths.appPackageJson).name;
const useYarn = fs.existsSync(paths.yarnLockFile);

const compiler = createCompiler(webpack, config, 'acorn-webapp', appName, useYarn);

compiler.watch(
  {
    ignored: ['node_modules'],
  },
  (err, stats) => {
    if (err) {
      console.log(err.message || err);
      process.exit(1);
    }
  },
);

compiler.hooks.invalid.tap('invalid', () => {
  fs.writeFileSync(path.join(paths.appBuildSsr, '.build-invalidated'), Date.now());
});

compiler.hooks.done.tap('done', () => {
  fs.writeFileSync(path.join(paths.appBuildSsr, '.build-done'), Date.now());
});
