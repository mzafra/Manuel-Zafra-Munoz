var mongoose = require('mongoose');

PreguntaSchema = mongoose.Schema({
	pregunta:  String,
	color:   String,
	r1:      String,
	r2:       String,
	r3:       String,
	r4: 		String,
	correcta: 	String,  
});
