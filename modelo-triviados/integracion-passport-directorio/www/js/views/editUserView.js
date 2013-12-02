

UserMan.Views.EditUserView = Backbone.View.extend({
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
            that.user = new UserMan.Models.User({id:id});
            that.user.fetch({
                success:function (user){
                    var template = _.template($('#edit-user-template').html(), {user:user});
                    that.$el.html(template); 
                }
            })
        }
        else {
            var template = _.template($('#edit-user-template').html(), {user:null});
            //console.log('plantilla:');
            this.$el.html(template);  
        }
      },
      events: {
            'submit .edit-user-form': 'saveUser',
            'click .delete' : 'deleteUser'
          },
          saveUser: function () {                

                //var userDetails = $(ev.currentTarget).serializeObject();  
                
                var userDetails = {};
                
                $( '.edit-user-form' ).children( 'input' ).each( function( i, el ) {
                    if( $( el ).val() != '' )
                    {
                        userDetails[ el.name ] = $( el ).val();
                    }
                });
                var user = new UserMan.Models.User();

                //console.log(userDetails);
                
                user.save(userDetails,{
                success: function(){
                  //console.log("usuario creado en cliente");
                  router.navigate('',{trigger:true});
                }
              })
                return false;
            },
          deleteUser:function(ev){
              //console.log(this.user);
              this.user.destroy({
                success: function () {
                   console.log('usuario eliminado');
                   router.navigate('',{trigger:true}); 
                }
              })
              return false;
            }
  });