function ejemploClass(){
	this.prop1 = 5;
	this.prop2 = "World";
	this.metodo1 = function metod1(arg1){
		return arg1 + " "+this.prop2;
	}
}