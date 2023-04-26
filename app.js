const http = require('http');

const server = http.createServer((req,res) =>{
    // console.log(req.url);
    // process.exit();
    res.write("Ajay");
    res.end();
});

server.listen(4000);