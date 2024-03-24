const function_resolver = require('./function_resolver.js');

const parseMarkdown = (markdown) => {
    const lines = markdown.split('\n');
    const elements = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        let elementType, elementContent;

        if (line.startsWith('#')) {
            elementType = 'header';
        } else if (line.startsWith('* ')) {
            elementType = 'unorderedList';
            
        } else if (line[0] >= '0' && line[0] <= '9' && line[1] === '.' && line[2] === ' ') {
            elementType = 'orderedList';
        } else if (line.startsWith('![[') && line.endsWith(']]')) {
            elementType = 'image';
        } else if (line.startsWith('`') && line.endsWith('`')) {
            elementType = 'inlineCode';
        } else if (line.startsWith('```')) {
            elementType = 'codeBlock';
            elementContent = line;
            i++;
            while (i < lines.length && !lines[i].startsWith('```')) {
                elementContent += lines[i];
                i++;
            }
        } else {
            elementType = 'paragraph';
        }


        // Extract element content if not already extracted
        elementContent = elementContent || line;
        elements.push({ type: elementType, text: elementContent });
    }

    console.log(elements);
    return elements;
};

function fuse_same_type_elements(elements) {
    let fused_elements = [];
    let current_element = elements[0];
    let new_element;
    for (let i = 1; i < elements.length; i++) {
        if (current_element.type === elements[i].type) {
            new_element = { type: current_element.type, text: current_element.text + '\n' + elements[i].text };
            current_element = new_element;
        } else {
            fused_elements.push(current_element);
            current_element = elements[i];

        }
    }
    fused_elements.push(current_element);
    return fused_elements;
}

module.exports = { parseMarkdown, fuse_same_type_elements };