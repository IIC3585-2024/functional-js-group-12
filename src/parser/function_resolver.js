const format_backticks = require('../converter/backticks.js');
const format_code_blocks = require('../converter/code_block.js');
const emphasis_converter = require('../converter/emphasis.js');
const header_converter = require('../converter/headers.js');
const formatImages = require('../converter/image.js');
const paragraph_converter = require('../converter/paragraphs.js');
const ol_list_converter = require('../converter/lists/lists.js');
const hyperlinks = require('../converter/hyperlink.js');

const function_resolver = (type) => {
    if (type === 'header') {
        return header_converter.header_converter;
    }
    if (type === 'unorderedList'){
        return list_converter.list_converter;
    }
    if (type === 'orderedList') {
        return ol_list_converter;
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
    if (type === 'emphasis') {
        return emphasis_converter.emphasis_converter;
    }
}

const apply_consecutive_formats = (element) => {
    /**
     * This function applies the formats to elements inside elements
    */

    if (element.text === "") return ""

    let parsedElement = element.text.split(' ')

    let formatableArray = []

    for (let i = 0; i < parsedElement.length; i++) {
        let unformattedString = parsedElement[i]
        if (unformattedString.startsWith('*') || unformattedString.startsWith('_')) {
            let specialChar = unformattedString[0]
            let formattedString = ''
            let j = i
            while (j < parsedElement.length && !parsedElement[j].endsWith(specialChar)) {
                formattedString += parsedElement[j] + ' '
                j++
            }
            formattedString += parsedElement[j]
            i = j
            formatableArray.push(formattedString)
            
            
        }
        else {
            formatableArray.push(unformattedString)
        }
    }

    for (let i = 0; i < formatableArray.length; i++) {
        let insideFormat = apply_consecutive_formats({ type: 'emphasis', text: formatableArray[i].slice(1, -1)})
        let formattedCompleteString = formatableArray[i][0] + insideFormat + formatableArray[i][formatableArray[i].length - 1]
        formatableArray[i] = function_resolver(element.type)(formattedCompleteString)

    }

    return formatableArray.join(' ')

}

console.log (apply_consecutive_formats({ type: 'emphasis', text: 'Hola *_como estas_*'}))

// module.exports = function_resolver, apply_consecutive_formats;

