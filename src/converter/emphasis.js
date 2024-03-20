const compose = (f, g) => (x) => f(g(x));

const strong_adder = (input_string) => {
    // This function takes a string of a paragraph in Markdown format and returns the string in HTML format
    const bold_regex = /(\*\*|__)(.*?)\1/g;
    let html_strong = input_string.replace(bold_regex, '<strong>$2</strong>');

    return html_strong;
}

const italic_adder = (input_string) => {
    // This function takes a string of a paragraph in Markdown format and returns the string in HTML format
    const italic_regex = /(\*|_)(.*?)\1/g;
    let html_italic = input_string.replace(italic_regex, '<em>$2</em>');

    return html_italic;
}

const emphasis_converter = compose (italic_adder, strong_adder);



if (require.main === module) {
    console.log('Testing emphasis.js');
    const input_string = "*This is a strong and __italic__ text.*";
    console.log(emphasis_converter(input_string));
}