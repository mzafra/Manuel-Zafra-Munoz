
function partida(){
	this.tablero = "";
	this.jugador1 = "";
	this.jugador2 = "";
	this.metodo1 = function metod1(arg1){
		return arg1+" "+this.prop2;
	}
}	
function juego(){}

function tablero(){
	//42 casillas
	//casillaQuesito: 1,8,15,22,29,36  
	var posCasillaQuesito=[1,8,15,22,29,36,43];
	var posRojo=[11,21,29,37,47];
	var posNegro=[10,34];
	var posAmarillo=[5,18,28,36,44];
	var posAzul=[4,14,22,30,40];
	var posMarron=[1,9,19,32,42];
	var posVerde=[2,12,25,35,43];
	var posNaranja=[7,15,23,33,46];
	var posRosa=[8,16,26,,35,49];
	var posGris=[3,6,13,17,20,24,27,31,38,41,45,48];


	this.iniTablero = function (){
		var col = new Array(49);
		for(var i=1;i<=49;i++)
			col[i] = (new casilla(i,"P"));
	
		for(i in posCasillaQuesito)
			col[posCasillaQuesito[i]]=(new casilla(posCasillaQuesito[i],"Q"));
		for(i in posRojo){
			col[posRojo[i]].color="rojo";
		}
		for(i in posNaranja){
			col[posNaranja[i]].color="naranja";
		}
		for(i in posAmarillo){
			col[posAmarillo[i]].color="amarilla";
		}
		for(i in posRosa){
			col[posRosa[i]].color="rosa";
		}
		for(i in posGris){
			col[posGris[i]].color="gris";
			col[posGris[i]].tipo="T";
		}
		for(i in posMarron){
			col[posMarron[i]].color="marron";
		}
		for(i in posVerde){
			col[posVerde[i]].color="verde";
		}
		for(i in posAzul){
			col[posAzul[i]].color="azul";
		}
		for(i in posNegro){
			col[posAzul[i]].color="negro";
			col[posAzul[i]].tipo="D";
		}

		return col;
	};	
	
	this.tablero = this.iniTablero();
	//this.casillasQueso=this.casillasQ();
}


function casilla(numero,tipo){
	this.numero=numero;
	this.tipo=tipo; //Q,T,P,D
	this.color=""; //rojo,verde,naranja
}


function jugador(){
	this.nombre="";
	this.ficha= new ficha();
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

var jug1 = new jugador();
jug1.nombre="Pepito";

var jug2 = new jugador();
jug2.nombre="Juanito";

var tablero=new tablero();

