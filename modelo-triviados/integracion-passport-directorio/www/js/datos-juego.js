var serviceURL = "http://127.0.0.1:3000/";

var partida;
var user;

$('#partida').bind('pageinit', function(event) {
	getPartida();
});

function getUser(){

	$.getJSON(serviceURL + 'me', function(data) {
		user = data;
		console.log(data);
	});
};

function getPartida(){
	$.getJSON(serviceURL + 'datosJuego', function(data) {
		$('#part li').remove();
		partida = data;
		console.log(data);

	getUser();

	$('#datos').append('Jugador 1 nombre: ' +partida.partida.jugador1.nombre);
	$('#datos').append(' |||||| Jugador 2 nombre: ' +partida.partida.jugador2.nombre);
	$('#datos').append(' |||||| Turno: ' + partida.partida.turno.nombre);
	$('#tirar').on('click', function(){

		if(String(partida.partida.turno.id) == String(user._id)){
			$('#tirada').append(' Tirada: ' + dado());
			
		} else {console.log("No es tu turno dinosaurio");}
		});


	});
};


function dado(){
       
                return Math.round(Math.random()*5 +1)
        };