
const paragraph_converter = (input_string) => {
    // This function takes a string of a paragraph in Markdown format and returns the string in HTML format

    let html_paragraph = `<p>${input_string}</p>`.replace(/\n/g, '<br>');;
    return html_paragraph;
}


if (require.main === module) {
    console.log('Testing paragraphs.js');
    const input_string = "This is a paragraph \n with a line break.";
    console.log(paragraph_converter(input_string));
}

module.exports = { paragraph_converter };