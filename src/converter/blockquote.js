function blockquote_converter(markdown) {
  const html = markdown.replace(/^> (.+)/gm, '<blockquote>$1</blockquote>');

  return html;
}

model.exports = blockquote_converter;
