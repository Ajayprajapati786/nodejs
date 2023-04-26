const http = require('http');

const server = http.createServer((req,res) =>{
    const url = req.url;

    if(url === '/'){
        res.write("Ajay");
        return res.end();
    }else if(url === '/about'){
        res.write("About");
        return res.end();
    }

});

server.listen(4000);