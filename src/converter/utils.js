const stringToArray = (string) => string.split('\n');
const parser = parserFunctions => data => parserFunctions.reduce((item, fn) => fn(item), data);
const compose = (f, g) => x => f(g(x));
const compose_3 = (f, g, h) => x => f(g(h(x)));

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
  toHtmlList,
  compose_3
};
