
PreguntaMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        
                        listaPreguntas.collection.fetch({reset:true});
                        listaPreguntas.render();

                        //UserMan.users.fetch();
                        //console.log(UserMan.users);
                      },
                      edit:function(id){
                        console.log("id:", id);
                        crearEditarPreguntas.render(id);
                        //new PreguntaMan.Views.EditPreguntaView({numObj:id});
                      }
                  });

var preguntas = new PreguntaMan.Collections.Preguntas();
var listaPreguntas = new PreguntaMan.Views.preguntaListView({collection:preguntas});
var crearEditarPreguntas = new PreguntaMan.Views.EditPreguntaView();

var router = new PreguntaMan.Router();
Backbone.history.start();
