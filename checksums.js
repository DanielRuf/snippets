const s = fs.readFileSync(file);
const crypto = require('crypto');

const md5sum = crypto.createHash('md5').update(s).digest('hex');
const sha1sum = crypto.createHash('sha1').update(s).digest('hex');
const sha256sum = crypto.createHash('sha256').update(s).digest('hex');