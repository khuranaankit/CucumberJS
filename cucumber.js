let common =[
    '--format json:./reports/cucumber-json-report.json',
    '--require step-definitions/*.js',
    '--publish-quiet'
].join(' ');
const path = require('path');
// const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, 'dev.env')
} );
module.exports = {default: common
    // ,plugins: [
    //     new webpack.DefinePlugin( {
    //       "process.env": dotenv.parsed
    //     } ),
    //   ]
};