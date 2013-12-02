var User = require('../app/models/user');
var Partida = require('../app/models/partida');
var Tablero = require('../app/models/tablero');
var Jugador = require('../app/models/jugador');

var jug1 = new Jugador();
jug1.nombre = "Pepito";
var jug2 = new Jugador();
jug2.nombre = "Gallud";

var partida = new Partida();
partida.tablero = new Tablero();
partida.jugador1 = jug1;
partida.jugador2 = jug2;


var Auth = require('./middlewares/authorization.js');
var fs = require('fs');


function asignarPartida(user){
	


};

module.exports = function(app, passport){
	app.get("/", function(req, res){ 
		if(req.isAuthenticated()){
		  res.render("home", { user : req.user}); 
		}else{
			res.render("home", { user : null});
		}
	});

	app.get("/datosJuego", Auth.userExist, function(req, res){
		var jsonData = {
			"partida": partida
		}
		res.send(jsonData);
	});

	app.get("/login", function(req, res){ 
		res.render("login");
	});

	app.post("/login" 
		,passport.authenticate('local',{
			successRedirect : "/",
			failureRedirect : "/login",
		})
	);

	app.get("/signup", function (req, res) {
		res.render("signup");
	});

	app.post("/signup", Auth.userExist, function (req, res, next) {
		User.signup(req.body.email, req.body.password, function(err, user){
			if(err) throw err;
			req.login(user, function(err){
				if(err) return next(err);
				return res.redirect("ini");
			});
		});
	});

	app.get("/auth/facebook", passport.authenticate("facebook",{ scope : "email"}));

	app.get("/auth/facebook/callback", 
		passport.authenticate("facebook",{ failureRedirect: '/login'}),
		function(req,res){
			res.redirect("/ini");
			//res.render("profile", {user : req.user});
		}
	);

	app.get("/auth/twitter", passport.authenticate("twitter",{ scope : "email"}));

	app.get("/auth/twitter/callback", 
		passport.authenticate("twitter",{ failureRedirect: '/login'}),
		function(req,res){
			//res.render("tablero",{user : req.user});
			//res.render("profile", {user : req.user});
			res.redirect("/ini");
		}
	);

	app.get("/ini",Auth.isAuthenticated,function(request,response){
		var contenido=fs.readFileSync("./index-modelo.html");
		response.setHeader("Content-type","text/html");
		response.send(contenido);
	});

	//Get a list of all books
	app.get( '/empleados', Auth.isAuthenticated, function( request, response ) {
	    return User.find( function( err, users ) {
	        if( !err ) {
	            //console.log(empleados);
	            return response.send( users );
	        } else {
	            return console.log( err );
	        }
	    });
	});

	app.get('/partida', Auth.isAuthenticated, function( request, response ) {

		response.render("tablero",{partida:partida});

	});



	app.get("/admin", Auth.isAuthenticated,function(request,response){
	    var contenido=fs.readFileSync("./index-backbone.html");
	    response.setHeader("Content-type","text/html");
	    response.send(contenido);
	});

	app.get("/profile", Auth.isAuthenticated , function(req, res){ 
		res.render("profile", {user : req.user});
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/ini');
	});


	app.post( '/empleados', Auth.isAuthenticated, function( request, response ) {

		User.signup(request.body.email, request.body.password, function(err, user){
			if(err) throw err;
			request.login(user, function(err){
				if(err) return next(err);
				return res.redirect("/ini");
			});
		});
	/*	
    var user = new User({
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        email: request.body.email,
        titulo:request.body.titulo,
        img:request.body.img,
        reportCount:request.body.reportCount,
    });
    user.save( function( err ) {
        if( !err ) {
            return console.log( 'created server' );
        } else {
            return console.log( err );
        }
    });
    return response.send( user );
    */
	});


	app.get( '/empleados/:id', Auth.isAuthenticated, function( request, response ) {
    return User.find( function( err, users ) {
        if( !err ) {
            return response.send( users );
        } else {
            return console.log( err );
        }
    });
	});

	app.put( '/empleados/:id', Auth.isAuthenticated, function( request, response ) {
    console.log( 'Actualizar usuario ' + request.body.nombre );
    return User.find( request.params.id, function( err, users ) {
        users.nombre = request.body.nombre;
        users.apellidos = request.body.apellidos;
        users.email = request.body.email;
        users.titulo = request.body.titulo;
        users.img = request.body.img;
        users.reportCount = request.body.reportCount;

        return user.save( function( err ) {
            if( !err ) {
                console.log( 'usuario actualizado' );
            } else {
                console.log( err );
            }
            return response.send( users );
        });
    });
	});
}
