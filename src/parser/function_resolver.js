const format_backticks = require('../converter/backticks.js');
const format_code_blocks = require('../converter/code_block.js');
const emphasis_converter = require('../converter/emphasis.js');
const header_converter = require('../converter/headers.js');
const formatImages = require('../converter/image.js');
const paragraph_converter = require('../converter/paragraphs.js');
const hyperlinks = require('../converter/hyperlink.js');

const function_resolver = (type) => {
    if (type === 'header') {
        return header_converter.header_converter;
    }
    if (type === 'unorderedList'){
        return list_converter.list_converter;
    }
    if (type === 'orderedList') {
        return list_converter.list_converter;
    }
    if (type === 'image') {
        return formatImages;
    }
    if (type === 'inlineCode') {
        return format_backticks;
    }
    if (type === 'codeBlock') {
        return format_code_blocks;
    }
    if (type === 'paragraph') {
        return paragraph_converter.paragraph_converter;
    }
    if (type === 'emphasis') {
        return emphasis_converter.emphasis_converter;
    }
}



module.exports = function_resolver, apply_consecutive_formats;