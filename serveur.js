const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    const src = fs.createReadStream(process.argv[3])
    src.pipe(response)
}).listen(process.argv[2])