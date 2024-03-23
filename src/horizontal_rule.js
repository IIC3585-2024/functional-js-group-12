function format_horizontal_rule() {
    return "<hr>";
  }

  function format_hyperlink(text){
    const { link, name} = separateLinkAndText(text);

    return "<a href=\"" + link + "\">" + name + "</a>";
}