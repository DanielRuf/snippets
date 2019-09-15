const supportsColors = 
    typeof process.stdout.hasColors !== 'undefined' &&
    argvProcessed.keys.includes('--color')
        ? process.stdout.hasColors()
        : false;

const COLOR = {
    RED: '',
    RESET: ''
}

if(supportsColors) {
    COLOR.RED = "\x1b[31m";
    COLOR.RESET = "\x1b[0m";
}