var http = require("http");
var url =  require("url");

function start(){
	function onRequest(request, response){
	  var pathname = url.parse(request.url).pathname;
	  console.log("request for "+ pathname + " received" );
 	  response.writeHead(200,{"Content-Type":"text/plain"});
 	  response.write("Hey node js , wassup");
  	  console.log("response wrote something");
 	  response.end();
	}
  http.createServer(onRequest).listen(8889);
  console.log("server has started");
}

exports.start = start;

function say(word){
  console.log(word);
}
function execute(someFunction,value){
  someFunction(value);
}
