var jugador = function jugador(){
	this.nombre="";
	this.ficha= new ficha();
	this.id = "";
}

function ficha(){
	this.quesitos=new Array(new quesito("rojo",false),new quesito("verde",false), new quesito("naranja",false), 
							new quesito("amarilla",false), new quesito("azul",false), new quesito("rosa",false), 
							new quesito("marron",false));
}

function quesito(color,conseguida){
	this.color=color;
	this.conseguida=conseguida;
}

module.exports = jugador;