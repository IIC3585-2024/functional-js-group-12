function createHtml(head, body) {
    return "<!DOCTYPE html>\n  <html>\n    <head>\n     " + head + "    </head>\n    <body>\n      " + body + "\n    </body>\n  </html>";

}

function writeHtmlOnConsole(head, body) {
    console.log(createHtml(head, body));
}
    
writeHtmlOnConsole("<title>My Title</title>", "<h1>Hello, World!</h1>");