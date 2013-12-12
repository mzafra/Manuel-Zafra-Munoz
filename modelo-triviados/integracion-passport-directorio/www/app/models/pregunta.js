var mongoose = require('mongoose');

PreguntaSchema = mongoose.Schema({
	pregunta:  String,
	color:   String,
	r1:      String,
	r2:       String,
	r3:       String,
	correcta: 	String,  
});

var Pregunta = mongoose.model("Pregunta", PreguntaSchema);
module.exports = Pregunta;
