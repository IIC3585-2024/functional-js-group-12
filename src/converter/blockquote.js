function blockquote_converter(markdown) {
  const html = markdown.replace(/^> (.+)/gm, '<blockquote>$1</blockquote>');

  return html;
}

module.exports = {
  blockquote_converter
}; // Path: src/converter/code_block.js