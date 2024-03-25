const header_converter = (input_string) => {
    let header_level = input_string.match(/^#+/)[0].length;
    let header_text = input_string.replace(/^#+\s/, '');

    let html_header = `<h${header_level}>${header_text}</h${header_level}>`;
    return html_header;
}

module.exports = { header_converter };
