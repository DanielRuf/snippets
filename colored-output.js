const supportsColors = 
    typeof process.stdout.hasColors !== 'undefined'
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