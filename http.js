var app=require('http');
var request=require('request');
var server=app.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hey There! \n");
});
server.listen(7000);
request("https://www.google.com",function(error,response,body){
    console.log(body);
})