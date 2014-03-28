var http = require("http");
var router = require("./router.js");

exports.startup = function startup(port)
{
	http.createServer(handleRequest).listen(port);
	console.log("Hello! Server listening on port " + port);
}

function handleRequest(request, response)
{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}