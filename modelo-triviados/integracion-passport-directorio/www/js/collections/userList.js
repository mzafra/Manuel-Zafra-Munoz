UserMan.Collections.Users = Backbone.Collection.extend({
    model: UserMan.Models.User,
    url:'/users'
});