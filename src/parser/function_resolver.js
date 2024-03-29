const { compose, compose_4 } = require('../converter/utils.js');
const format_backticks = require('../converter/backticks.js');
const format_code_blocks = require('../converter/code_block.js');
const emphasis_converter = require('../converter/emphasis.js');
const header_converter = require('../converter/headers.js');
const formatImages = require('../converter/image.js');
const paragraph_converter = require('../converter/paragraphs.js');
const lists_converter = require('../converter/lists.js');
const hyperlinks = require('../converter/hyperlink.js')
const blockquote_converter = require('../converter/blockquote.js');
const horizontal_rule = require('../converter/horizontal_rule.js');


const function_resolver = (type) => {
    if (type === 'header') {
        return header_converter.header_converter;
    }
    if (type === 'unorderedList'){
        return lists_converter.ul_list_converter;
    }
    if (type === 'orderedList') {
        return lists_converter.ol_list_converter;
    }
    if (type === 'image') {
        return formatImages;
    }
    if (type === 'inlineCode') {
        return format_backticks.format_backticks;
    }
    if (type === 'codeBlock') {
        return format_code_blocks.format_code_blocks;
    }
    if (type === 'paragraph') {
        return paragraph_converter.paragraph_converter;
    }
    if (type === 'blockquote') {
        return blockquote_converter.blockquote_converter;
    }
    if (type === 'hr') {
        return horizontal_rule.format_horizontal_rule;
    }
}

const apply_format = (element) => {
    const { type, text } = element;
    const resolvedFunction = function_resolver(type);
    const formatted_element = compose_4(format_code_blocks.format_code_blocks, hyperlinks.hyperlink_converter, emphasis_converter.emphasis_converter, resolvedFunction)(text);
    return formatted_element;
}

module.exports = { 
    function_resolver,
    apply_format
};
