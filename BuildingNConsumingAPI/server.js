let http = require('http')

let server = http.createServer((req, resp)=>{
    console.log('Request recieved')
    resp.end("Sup bro!")
})

server.listen(8005, ()=>{
    console.log('server started')
})