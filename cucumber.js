// command to rerun test cases in rerun.txt: $ cucumber-js '@rerun.txt'
//next topic : handling files in Cucumber-JS
let common =[
    '--format json:./reports/cucumber-json-report.json',
    '--format progress-bar',
    '--parallel 3',
    '--format rerun:@rerun.txt',//create rerun.txt for all failed test cases.
    '--retry 1',//define number of retries.
    '--retry-tag-filter "@flaky"',//define filter for retry/flaky test cases.
    '--require step-definitions/*.js',
    '--publish-quiet'
].join(' ');

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, 'dev.env')
} );
module.exports = {default: common
    ,plugins: [
        new webpack.DefinePlugin( {
          "process.env": dotenv.parsed
        } ),
      ]
};
