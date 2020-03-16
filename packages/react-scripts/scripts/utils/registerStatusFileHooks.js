'use strict';

const fs = require('fs');
const path = require('path');

const paths = require('../../config/paths');

module.exports = function(compiler) {
  compiler.hooks.invalid.tap('invalid', () => {
    fs.writeFileSync(
      path.join(paths.appBuildSsr, '.build-status'),
      'IN_PROGRESS'
    );
  });
  compiler.hooks.done.tap('done', () => {
    fs.writeFileSync(path.join(paths.appBuildSsr, '.build-status'), 'DONE');
  });
};
