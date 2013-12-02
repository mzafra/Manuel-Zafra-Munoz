var serviceURL = "http://127.0.0.1:3000/";

var partida;

$('#partida').bind('pageinit', function(event) {
	getPartida();
});

function getPartida(){
	$.getJSON(serviceURL + 'datosJuego', function(data) {
		$('#part li').remove();
		partida = data;
		console.log(data);
		
	});
};
