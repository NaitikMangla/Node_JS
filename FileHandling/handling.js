let path = require('node:path')
let fs = require('node:fs')

let myFolder = __dirname
let textFiles = path.join(myFolder, 'logs')
console.log(textFiles)
// fs.writeFileSync(path.join(myFolder, 'text1.txt'), 'hello from naitik')
fs.mkdirSync(textFiles, {recursive : true}) // create missing dirs to complete the path
fs.writeFileSync(path.join(textFiles, 'text2.txt'), 'hello peter') // create required file in given path to a folder