const fs = require('fs')

module.exports = (directory,extension,callback)=>{
    fs.readdir(directory,(err,file)=>{
        if(err) return callback(err);
        const list = file.filter((v)=>v.split('.')[1] === extension)
        callback(null , list)
    })
    
}