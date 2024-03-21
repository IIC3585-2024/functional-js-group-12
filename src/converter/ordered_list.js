const stringToArray = (string) => string.split('\n');
const toHtmlList = (items) => items.map((line) => parseLine(line));
const parser = parserFunctions => data => parserFunctions.reduce((item, fn) => fn(item), data);
const compose = (f, g) => x => f(g(x));

const itemParsers = [
  item => item.trim(),
  item => item.substring(2).trim(),
  item => `<li>${item}</li>`
];

const parseLine = parser(itemParsers);

function fromMarkdownToOrderedList(markdownList) {
  const htmlList = compose(toHtmlList, stringToArray)(markdownList);
  return `<ol>${htmlList.join('')}</ol>`;
}

export default fromMarkdownToOrderedList;