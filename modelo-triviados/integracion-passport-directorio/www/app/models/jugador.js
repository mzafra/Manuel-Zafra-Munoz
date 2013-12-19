var jugador = function jugador(){
	this.nombre="";
	this.ficha= new ficha();
	this.id = "";
	this.posicion = 0;
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

function dado(){
        this.tirarDado=function (){
                return Math.round(Math.random()*5 +1)
        }
}

module.exports = jugador;