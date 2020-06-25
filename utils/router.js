
function route(handle, pathname, response) {
  
  if (typeof handle[pathname] === 'function') {

    handle[pathname](response);
  
} else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No Encontrado");
    response.end();
  }
}

exports.route = route;