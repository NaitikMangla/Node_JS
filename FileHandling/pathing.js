let path = require('node:path')
const { fileURLToPath } = require('node:url')
// console.log(__filename)
// console.log(__dirname)

let p2file = __filename
let p2folder = __dirname

// console.log(path.basename(p2file))
// console.log(path.basename(p2folder))

// console.log(path.extname(p2file)) --> .js
// console.log(path.extname(p2folder)) --> <empty> : it doesnt end with '.something'

// console.log(path.parse(p2file))

// console.log(path.resolve(p2folder,'/newTextFiles','contacts.txt'))
