const parser = require('./parser/parser.js');
const function_resolver = require('./parser/function_resolver.js');

const markDown_to_HTML = (markdown) => {
    const elements = parser.parseMarkdown(markdown);
    const fused_elements = parser.fuse_same_type_elements(elements);
    let html = '';

    for (let i = 0; i < fused_elements.length; i++) {
        let html_element;
        const element = fused_elements[i];

        html_element = function_resolver.apply_format(element);
        html += html_element;
    }

    return html;
}

module.exports = markDown_to_HTML;
