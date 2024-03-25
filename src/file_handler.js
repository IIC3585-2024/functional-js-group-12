const fs = require('fs');
const readLine = require('node:readline');
const markDown_to_HTML = require('./markDown_to_HTML.js');

// input path

let inputPath =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputPath.question('Enter the path of the .md file you want to convert to HTML: ', (path) => {
    console.log(`Path is ${path}`);
    inputPath.close();


    fs.readFile(path, 'utf8', (err, data) => {
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
    }
);