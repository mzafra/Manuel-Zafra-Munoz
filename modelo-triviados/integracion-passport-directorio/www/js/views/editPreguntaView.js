PreguntaMan.Views.EditPreguntaView = Backbone.View.extend({
      el:'.page', 
      initialize: function(options){      
        //_.bindAll(this, "render");
        //this.render(options.numObj);
      },
      render: function(id){
        //4-a para probar
        //this.$el.html('Editar usuario-nuevo');      
        console.log("id ",id);  
        var that=this;
        if (id){
            console.log("id ",id);
            that.Pregunta = new PreguntaMan.Models.Pregunta({id:id});
            that.Pregunta.fetch({
                success:function (pregunta){
                    var template = _.template($('#edit-pregunta-template').html(), {pregunta:pregunta});
                    that.$el.html(template); 
                }
            })
        }
        else {
            var template = _.template($('#edit-pregunta-template').html(), {pregunta:null});
            //console.log('plantilla:');
            this.$el.html(template);  
        }
      },
      events: {
            'submit .edit-pregunta-form': 'savePregunta',
            'click .delete' : 'deletePregunta'
          },
          savePregunta: function () {                

                //var preguntaDetails = $(ev.currentTarget).serializeObject();  
                
                var preguntaDetails = {};
                
                $( '.edit-pregunta-form' ).children( 'input' ).each( function( i, el ) {
                    if( $( el ).val() != '' )
                    {
                        preguntaDetails[ el.name ] = $( el ).val();
                    }
                });
                var pregunta = new PreguntaMan.Models.Pregunta();

                //console.log(preguntaDetails);
                
                pregunta.save(preguntaDetails,{
                success: function(){
                  //console.log("usuario creado en cliente");
                  router.navigate('',{trigger:true});
                }
              })
                return false;
            },
          deletePregunta:function(ev){
              //console.log(this.pregunta);
              this.Pregunta.destroy({
                success: function () {
                   console.log('pregunta eliminado');
                   router.navigate('',{trigger:true}); 
                }
              })
              return false;
            }
  });