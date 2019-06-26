const fs = require('fs');
const process = require('process');

const file = './.node-version';

if (!fs.existsSync(file)) {
    return;
}

const nodeVersion = fs.readFileSync(file, {encoding: 'utf8'}).trim();
const processVersion = process.version.startsWith('v')
    ? process.version.slice(1)
    : process.version;

console.info('Checking Node.js version...');
console.info(`Node.js v${nodeVersion} (.node-version)`);
console.info(`Node.js v${processVersion} (process)`);

const [nodeVersionArray, processVersionArray] = [nodeVersion, processVersion].map((v) => v.split('.'));
const processVersionMasked = processVersionArray.slice(0, [nodeVersionArray.length]).join('.');

if (nodeVersion === processVersionMasked) {
    console.log('ok');
} else {
    console.error('not ok');
}