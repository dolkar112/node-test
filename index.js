const http = require("http");
const fs = require("fs");
const port = process.env.port;
const handle = (fileName , statustCode, req, res) =>{
    fs.readFile(fileName, "utf-8",
    (err, data) => {
        if (err){
            console.log(err);

        }else{
            res.writeHead (200, {
                "content-type": "text/html" });
                res.write(data);
                res.end();
            
        }
    });
}
const server = http.createServer((req ,res) => {
       if(req.url === "/"){
       handle("index.html", 200 , req, res);
      }else if(req.url === "/about"){
        handle("about.html", 200 , req, res);
      } else if (req.url === "/contact"){
        handle("contact.html", 200 , req, res);
      } else {
        handle("404.html", 404 , req, res);
      }

});

server.listen(port, () =>{
    console.log(`server is running in`)

});