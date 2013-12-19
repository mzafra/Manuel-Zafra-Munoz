var serviceURL = "http://127.0.0.1:3000/";

var partida;
var tirada;
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

		tirada = dado();
		$('#tirada').remove();
		$('#posIz').remove();
		$('#posDr').remove();

		if(String(partida.partida.turno.id) == String(user._id)){

			$('#datos').append('<div id="tirada">Tirada: '+tirada+'</div>');
			$('#datos').append('<div id="posIz">Tirada Izquierda: '+posicionIzquierda(queJugadorSoy().posicion, tirada)+' Tipo Casilla: '++'</div>');
			$('#datos').append('<div id="posDr">Tirada Derecha: '+posicionDerecha(queJugadorSoy().posicion, tirada)+'</div>');

			
		} else {console.log("No es tu turno dinosaurio");}
		});


	});
};

function posicionDerecha(posUsuario, tirada){

		return (posUsuario - tirada)%49;
}
function posicionIzquierda(posUsuario, tirada){

		return (posUsuario + tirada)%49;
}


function dado(){
       
            return Math.round(Math.random()*5 +1)
        };

function queJugadorSoy(){

	if( String(partida.partida.jugador1.id) == String(user._id))
		return partida.partida.jugador1;
	else if ( String(partida.partida.jugador2.id) == String(user._id)) 
		return partida.partida.jugador2;
}