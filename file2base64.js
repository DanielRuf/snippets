const fs   = require('fs');
const file = process.argv[2];
const data = fs.readFileSync(file).toString('base64');

fs.writeFileSync(file + '.base64', data);