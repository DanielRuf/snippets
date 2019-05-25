const os = require('os');

// create short OS specific platform identifiers
let os_platform = os.type().toLowerCase();
if (os_platform === 'windows_nt') {
  os_platform = 'win';
} else if (os_platform === 'darwin') {
  os_platform = 'macos';
} else {
  os_platform = 'linux';
}

// create short OS specific architecture identifiers
let os_arch = os.arch();
if (os_arch === 'x64') {
  os_arch = '64';
} else if (os_arch === 'x32') {
  os_arch = '32';
}

// for downloading and unzipping the needed release
const platform_arch = `${os_platform}${os_arch}`;