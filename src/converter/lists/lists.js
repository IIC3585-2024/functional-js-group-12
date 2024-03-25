const { compose } = require('./utils.js');
const { stringToArray } = require('./utils.js');
const { toHtmlList } = require('./utils.js');

function ol_list_converter(markdownList) {
  const htmlList = compose(toHtmlList, stringToArray)(markdownList);
  return `<ol>${htmlList.join('')}</ol>`;
}

function ul_list_converter(markdownList) {
  const htmlList = compose(toHtmlList, stringToArray)(markdownList);
  return `<ul>${htmlList.join('')}</ul>`;
}

module.exports = {
  ol_list_converter,
  ul_list_converter
}
