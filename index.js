var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.index;
handle["/pdf"] = requestHandlers.pdf;

server.runServer(router.route, handle);