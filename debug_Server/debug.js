var http = require('http');

console.log("debug server start ");

http.createServer(function(request, response){
    var body = "";
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function ()
    {
        console.log(body);
        response.writeHead(200, { 'Content-Type': 'text-plain' });
        response.end();
    });
}).listen(8081);