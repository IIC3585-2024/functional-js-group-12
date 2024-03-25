const fs = require('fs');
const markDown_to_HTML = require('./markDown_to_HTML.js');

fs.readFile('./src/readme.md', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }


    const html = markDown_to_HTML(data);

    fs.writeFile('./src/output.html', html, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been written');
    });
}
);