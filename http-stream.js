const http = require('http');
const fs = require('fs');

const server = http.createServer()
server.on('request',(req,res)=>{
    const stream = fs.createReadStream('./content/big-file.txt','utf8');
    stream.on('open',()=>{
        stream.pipe(res);
    })
    stream.on('error',(error)=>{
        res.end(error);
    })
})

server.listen(5000);
