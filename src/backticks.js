
function format_code_block(text) {
    return "<code>" + text + "</code>";
  }

function format_backticks(text) {
    const codeBlocks = getStringInsideTicks(text);
    codeBlocks.forEach((block) => {
      text = text.replace("`" + block + "`", format_code_block(block));
    });
  
    return text;
  }

  function getStringInsideTicks(text) {
    const regex = /``(.*?)``/g; // Updated regex
    const matches = text.match(regex);
    return matches ? matches.map((match) => match.slice(2, -2)) : [];
}