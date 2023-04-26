const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        const data = fs.readFileSync("Message.txt","utf-8");
        console.log(data);
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title> Enter Message </title> </head>");
        res.write('<body><form action ="/message" method ="POST" ><input type="text" name="message"><button type="submit">send</button></form></h1>');
        res.write(data);
        res.write("</body>")
        res.write("</html>");
        return res.end();
    }
    if(url ==='/message' && method ==='POST'){
        const body =[];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("Message.txt", message,(err)=>{
            res.statusCode = 302;
            res.setHeader('Location','/');
            res.setHeader('Content-Type','text/html');
            res.write("<html>");
            res.write("<head><title> My First Page </head></title>");
            res.write('<body><h1> Hello from node js server</body></h1>');
            res.write("</html>");
            res.end();
            });
            
    });
            

    }
   

});

server.listen(4000);