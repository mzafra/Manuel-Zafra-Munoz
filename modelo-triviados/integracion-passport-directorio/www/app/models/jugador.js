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

function dado(){
        this.tirarDado=function (){
                //create a random integer between 0 and 5
                return Math.round(Math.random()*5 +1)
                //document.images["mydice"].src=eval("face"+randomdice+".src")
        }
}
module.exports = jugador;