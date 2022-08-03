const http= require('http');

const server = http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('Welcome Home :) !!');
    }
    else if (req.url==='/about'){
        res.end('it about dinner ;)')
    }
    else {
        res.end(`
         <h1>Oops!</h1>
         <p>We can't seem to find the page you are looking for</p>
         <a href="/">back home</a>
        `)
    }
})
server.listen(5000);