const fs = require('fs')
 fs.readdir(process.argv[2] , (err , file)=>{
     const list = file.filter((v)=>v.split('.')[1] === process.argv[3])
     list.forEach((v)=>console.log(v));
 })