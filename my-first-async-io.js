const fs = require('fs')
const file = fs.readFile(process.argv[2] , (err,buffer)=>{
    console.log(buffer.toString().split('\n').slice(1).length);
})
