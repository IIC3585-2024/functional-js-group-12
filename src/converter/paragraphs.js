const paragraph_converter = (input_string) => {
    let html_paragraph = `<p>${input_string}</p>`.replace(/\n/g, '<br>');;
    return html_paragraph;
}

module.exports = { paragraph_converter };
