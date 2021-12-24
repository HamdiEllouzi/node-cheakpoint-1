const http = require('http');

http.get(process.argv[2], (res)=>{
    let data = '';
    res.on('data' , (chunk) => data += chunk)
    res.on('end', _=> {
        console.log(data.length)
        console.log(data)
    })
})