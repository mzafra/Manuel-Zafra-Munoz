var miModulo = require("./connect-git.js");

miModulo.getRepos("mzafra",function(repor){
	console.log("mzafra repos= "+repor.length);
	console.log("Repos= "+repor);
});