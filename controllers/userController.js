var path = require('path');

function index(response) {
  
    var body = "<a href='/pdf'>pdf</a><br><br><br></br><a href='/mercadoPag'>MercadoPago</a>";  

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);   
    response.end();
}
  
function pdf(response) {

    const { exec, spawn } = require('child_process');

    //let ruta = path.join(__dirname,"../app_pdf/prueba.bat");
    //let rutaAndData = `${ruta} F-124745`;
    rutaAndData = __dirname+"\\app_pdf\\generate_pdf.exe F-124745";

    exec(rutaAndData, (err, stdout, stderr) => {
        
        if (err) {
            console.error(err);
            return;
        }

        console.log(stdout);
    });
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("PDF OK");
    response.end();
}
  
exports.index = index;
exports.pdf = pdf;