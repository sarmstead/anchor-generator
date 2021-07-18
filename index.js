const prompt = require('prompt-sync')({sigint: true});

// Import modules
const createSrc = require('./utils/createSrc');
const createContent = require('./utils/createContent');
const saveFile = require('./utils/saveFile');

// User prompts
let srcDirPath = prompt('What is your src directory path? ');
let anchorContentFilePath = prompt('What is your anchor content file path? ');
let fileName = prompt('What file name do you want to save to? ');

try {
    let anchorSrc = createSrc(srcDirPath);
    let anchorContent = createContent(anchorContentFilePath);
    let fullAnchor = [];
    for (i=0; i < anchorSrc.length; i++) {
        fullAnchor.push(`<a href="${anchorSrc[i]}">${anchorContent[i]}</a>`);
    }
    saveFile(fullAnchor, fileName);
    console.log(fullAnchor);
  } catch (err) {
    console.error(err);
}