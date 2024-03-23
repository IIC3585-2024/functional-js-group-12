
const header_converter = (input_string) => {
    // This function takes a string of a header in Markdown format and returns the string in HTML format

    let header_level = input_string.match(/^#+/)[0].length;
    let header_text = input_string.replace(/^#+\s/, '');

    let html_header = `<h${header_level}>${header_text}</h${header_level}>`;
    return html_header;
}


if (require.main === module) {
    console.log('Testing headers.js');
    const input_string = "# This is a header";
    header_converter(input_string);
}