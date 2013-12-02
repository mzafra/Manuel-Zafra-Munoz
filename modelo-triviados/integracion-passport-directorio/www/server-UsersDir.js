

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var application_root = __dirname,
    path = require( 'path' ); //Utilities for dealing with file paths
var exp=require("express"),
    mongoose = require('mongoose');
var app=exp(); //el tutorial indicaba exp.createServer()

//routes = require('./js/routes/apiEmpleados')(app);

//app.use(app.router);
//app.use('/',exp.static(__dirname)); // + "/public"));

app.configure( function() {
    //parses request body and populates request.body
    app.use( exp.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( exp.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    //app.use( exp.static( path.join( application_root, 'site') ) );
    app.use('/',exp.static(__dirname));

    //Show all errors in development
    app.use( exp.errorHandler({ dumpExceptions: true, showStack: true }));
});


app.get("/",function(request,response){
	var contenido=fs.readFileSync("./index.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});

app.get("/admin",function(request,response){
    var contenido=fs.readFileSync("./index-backbone.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});


//check API
app.get( '/api', function( request, response ) {
    response.send( 'Librería API en marcha' );
});

//Get a list of all books
app.get( '/empleados', function( request, response ) {
    return EmpleadoModel.find( function( err, empleados ) {
        if( !err ) {
            //console.log(empleados);
            return response.send( empleados );
        } else {
            return console.log( err );
        }
    });
});

//Insert a new empleado
app.post( '/empleados', function( request, response ) {
    var empleado = new EmpleadoModel({
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        email: request.body.email,
        titulo:request.body.titulo,
        img:request.body.img,
        reportCount:request.body.reportCount,
    });
    empleado.save( function( err ) {
        if( !err ) {
            return console.log( 'created server' );
        } else {
            return console.log( err );
        }
    });
    return response.send( empleado );
});

console.log("servidor iniciado...");
app.listen(port,host);

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var Empleado = new Schema({
  nombre:String,
  apellidos:String,
  email: String ,
  titulo:String,
  img:String,
  reportCount:String//, enum:
  //['Hombre', 'Mujer']
});


//Obtener un usuario por id
app.get( '/empleados/:id', function( request, response ) {
    return EmpleadoModel.findById( request.params.id, function( err, empleado ) {
        if( !err ) {
            return response.send( empleado );
        } else {
            return console.log( err );
        }
    });
});

//Actualizar un usuario
app.put( '/empleados/:id', function( request, response ) {
    console.log( 'Actualizar usuario ' + request.body.nombre );
    return EmpleadoModel.findById( request.params.id, function( err, empleado ) {
        empleado.nombre = request.body.nombre;
        empleado.apellidos = request.body.apellidos;
        empleado.email = request.body.email;
        empleado.titulo = request.body.titulo;
        empleado.img = request.body.img;
        empleado.reportCount = request.body.reportCount;

        return empleado.save( function( err ) {
            if( !err ) {
                console.log( 'usuario actualizado' );
            } else {
                console.log( err );
            }
            return response.send( empleado );
        });
    });
});

//Eliminar un usuario
app.delete( '/empleados/:id', function( request, response ) {
    console.log( 'Eliminar usuario con id: ' + request.params.id );
    return EmpleadoModel.findById( request.params.id, function( err, empleado ) {
        return empleado.remove( function( err ) {
            if( !err ) {
                console.log( 'Usuario eliminado' );
                return response.send( '[{"ok":"ok"}]' );
            } else {
                console.log( err );
            }
        });
    });
});

//module.exports = mongoose.model('Empleado', Empleado);
var EmpleadoModel = mongoose.model('Empleado', Empleado);

mongoose.connect('mongodb://localhost/empleadodb', function(err, res) {
  if(err) {
    console.log('ERROR: al intentar conectar con la base de datos. ' + err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

