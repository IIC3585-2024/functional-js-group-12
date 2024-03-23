function format_code_blocks(text) {
    const codeBlocks = getStringInsideTicks(text);
    codeBlocks.forEach((block) => {
      text = text.replace("`" + block + "`", format_code_block(block));
    });
  
    return text;
  }

function format_code_block(text) {
    return "<code>" + text + "</code>";
  }


export default format_code_blocks;
 