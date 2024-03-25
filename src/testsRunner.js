const fs = require('fs');
const path = require('path');
const markDown_to_HTML = require('./markDown_to_HTML');

function runExamples(dirPath, specificTest) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      runExamples(filePath, specificTest);
    } else if (!specificTest || file === specificTest) {
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }

        const html = markDown_to_HTML(content);
        console.log(`=== RUNNING ${file} ===`);
        console.log('FROM:\n', content)
        console.log('TO:\n', html);
      });
    }
  });
}

const specificTest = process.argv[2];
runExamples(path.join(__dirname, '../examples'), specificTest);