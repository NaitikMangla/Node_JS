let fs = require('fs') // fs --> file system
// fs.writeFile('./testFile.txt', 'This is written by the program asynchronously', (err)=>{console.log(err)})
// let text = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(typeof text)

// fs.readFile('./contacts.txt', 'utf-8', (err, data)=>{
//     if(err != null)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data)
//     }
// })

// let newContact = {
//     name : "popli",
//     contact : '9875674526'
// }
// fs.appendFile('./contacts.txt', `\n${newContact.name} ${newContact.contact}`, (err)=>{
//     if(err) console.log(`something went wrong \n` + err) 
// })

fs.unlinkSync('./testFile.txt')