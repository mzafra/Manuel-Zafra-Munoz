var partida = function partida(){
	this.tablero = "";
	this.turno = "";
	this.jugador1 = "";
	this.jugador2 = "";
	
this.asignarPartida = function(user){

	if(String(user._id) == String(this.jugador1.id) || String(user._id) == String(this.jugador2.id)){
		console.log("Jugador ya ha sido asignado a una partida");
		return true;
	};
		if(this.jugador1.id == "0"){ 
			this.jugador1.id = user._id;
			this.jugador1.nombre = user.email;
			this.turno = this.jugador1;
			console.log("Jugador asignado a la partida como jugador1");
		}
		else if(this.jugador1.id != "0" && this.jugador2.id == "0"){ 
			this.jugador2.id = user._id;
			this.jugador2.nombre = user.email;
			console.log("Jugador asignado a la partida como jugador2");
		}
		else if(this.jugador1.id != "0" && this.jugador2.id != "0") console.log("Partida completa");
	}
};

module.exports = partida;