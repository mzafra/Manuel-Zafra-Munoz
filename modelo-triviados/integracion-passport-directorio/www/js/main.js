
EmpleadoMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        EmpleadoMan.empleados = new EmpleadoMan.Collections.Empleados();
                        new EmpleadoMan.Views.Empleados({collection:EmpleadoMan.empleados});
                        //UserMan.users.fetch();
                        //console.log(UserMan.users);
                      },
                      edit:function(id){
                        new EmpleadoMan.Views.EditEmpleadoView({numObj:id});
                      }
                  });

var router = new EmpleadoMan.Router();
Backbone.history.start();
