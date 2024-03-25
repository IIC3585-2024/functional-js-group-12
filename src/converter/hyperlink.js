function hyperlink_converter(text) {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/;
    const match = text.match(regex);
    
    if (match) {
        const link = match[2];
        const name = match[1];
        return text.replace(`[${name}](${link})`, `<a href="${link}">${name}</a>`);
    } else {
        return text;
    }
}


if (require.main === module) {
    console.log('Testing hyperlink.js');
    const input_string = "La guía de descuentos se encuentra [link](https://github.com/IIC2233/syllabus/blob/master/Tareas/Descuentos.md)";
    console.log(hyperlink_converter(input_string));
}

module.exports = { hyperlink_converter };
