let common =[
    '--format json:./reports/cucumber-json-report.json',
    '--require step-definitions/*.js',
    '--publish-quiet'
].join(' ');

module.exports = {default: common};