const stringToArray = (string) => string.split('\n');
const parser = parserFunctions => data => parserFunctions.reduce((item, fn) => fn(item), data);
const compose = (f, g) => x => f(g(x));

const toHtmlList = (items) => items.map((line) => parseLine(line));

const itemParsers = [
  item => item.trim(),
  item => item.substring(2).trim(),
  item => `<li>${item}</li>`
];

const parseLine = parser(itemParsers);

module.exports = {
  compose,
  stringToArray,
  toHtmlList
};
