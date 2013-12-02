
var Router = Backbone.Router.extend({
		        routes: {
		          "": "home", 
		          "new": "edit",
		        }
		    });


var router = new Router();

router.on('route:home', function() {
		      		      
		      userListView.render();
    });

router.on('route:edit', function(id) {
	      		//userEditView.render({id: id});	      		
	      		
	      		editUserView.render();
   	});