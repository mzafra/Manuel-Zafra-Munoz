

EmpleadoMan.Views.EditEmpleadoView = Backbone.View.extend({
      el:'.page', 
      initialize: function(options){      
        //_.bindAll(this, "render");
        this.render(options.numObj);
      },
      render: function(id){
        //4-a para probar
        //this.$el.html('Editar usuario-nuevo');        
        var that=this;
        if (id){
             //console.log("id ",id);
            that.Empleado = new EmpleadoMan.Models.Empleado({id:id});
            that.Empleado.fetch({
                success:function (empleado){
                    var template = _.template($('#edit-empleado-template').html(), {empleado:empleado});
                    that.$el.html(template); 
                }
            })
        }
        else {
            var template = _.template($('#edit-empleado-template').html(), {empleado:null});
            //console.log('plantilla:');
            this.$el.html(template);  
        }
      },
      events: {
            'submit .edit-empleado-form': 'saveEmpleado',
            'click .delete' : 'deleteEmpleado'
          },
          saveEmpleado: function () {                

                //var empleadoDetails = $(ev.currentTarget).serializeObject();  
                
                var empleadoDetails = {};
                
                $( '.edit-empleado-form' ).children( 'input' ).each( function( i, el ) {
                    if( $( el ).val() != '' )
                    {
                        empleadoDetails[ el.name ] = $( el ).val();
                    }
                });
                var empleado = new EmpleadoMan.Models.Empleado();

                //console.log(empleadoDetails);
                
                empleado.save(empleadoDetails,{
                success: function(){
                  //console.log("usuario creado en cliente");
                  router.navigate('',{trigger:true});
                }
              })
                return false;
            },
          deleteEmpleado:function(ev){
              //console.log(this.empleado);
              this.empleado.destroy({
                success: function () {
                   console.log('usuario eliminado');
                   router.navigate('',{trigger:true}); 
                }
              })
              return false;
            }
  });