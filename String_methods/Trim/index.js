
function trimMethod(string) {

    if (string[0] === ' ') {
        string = string.slice(1, string.length);
    }

    if (string[string.length -1] === ' ') {
        string = string.slice(0, -1);
    }

    if (string[0] === ' ' || string[string.length - 1] === ' ') {
        return trimMethod(string);
    }

    return string;
}

trimMethod('      1213 123  ');
