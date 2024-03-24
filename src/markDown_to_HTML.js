const parser = require('./parser/parser.js');
const function_resolver = require('./parser/function_resolver.js');

const markDown_to_HTML = (markdown) => {
    const elements = parser.parseMarkdown(markdown);
    const fused_elements = parser.fuse_same_type_elements(elements);
    let html = '';

    console.log(fused_elements);

    for (let i = 0; i < fused_elements.length; i++) {
        const element = fused_elements[i];
        let html_element;

        html_element = function_resolver.apply_consecutive_formats(element)

        console.log(html_element);

        html += html_element;
    }

    return html;
}

if (require.main === module) {
    console.log('Testing markDown_to_HTML.js');
    const input_string = "* Hola \n * **Como estas** \n * Bien y tu";
    console.log(markDown_to_HTML(input_string));
}