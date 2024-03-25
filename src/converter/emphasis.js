const { compose } = require('./utils.js');

const bold_adder = (input_string) => {
    const bold_regex = /(\*\*|__)(.*?)\1/g;
    let html_strong = input_string.replace(bold_regex, (match, p1, p2) => `<b>${p2.trim()}</b>`);

    return html_strong;
}

const italic_adder = (input_string) => {
    const italic_regex = /(\*|_)(.*?)\1/g;
    let html_italic = input_string.replace(italic_regex, '<em>$2</em>');

    return html_italic;
}

const emphasis_converter = compose(italic_adder, bold_adder);

module.exports = { emphasis_converter };
