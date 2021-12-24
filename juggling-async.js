const http = require('http');
let data1 = '';
let data2 = '';
let data3 = '';
http.get(process.argv[2], (res) => {
    res.on('data', (chunk) => data1 += chunk)
    res.on('end', _ => {
        http.get(process.argv[3], (res) => {
            res.on('data', (chunk) => data2 += chunk)
            res.on('end', _ => {
                http.get(process.argv[4], (res) => {
                    res.on('data', (chunk) => data3 += chunk)
                    res.on('end', _ => {
                        console.log(data1);
                        console.log(data2);
                        console.log(data3);
                    })
                })
            })
        })
    })
})

