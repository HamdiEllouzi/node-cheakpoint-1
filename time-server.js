const net = require('net');
const date = new Date()
let currentdate = new Date().toISOString().slice(0, 10)+' '+date.getHours()+':'+date.getMinutes()
net.createServer((socket)=>{
    socket.write(currentdate +'\n')
    socket.end()
}).listen(process.argv[2])
