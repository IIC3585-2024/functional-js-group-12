

function MarkDownIdentifier(line, next_line) {
    this.type = "identifier";
    this.value = "";
}

function HeaderIdentifier(line, next_line) {
    if (line.match(/^#+/)) {
        return
    }

}
