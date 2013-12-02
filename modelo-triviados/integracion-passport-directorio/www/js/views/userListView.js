
EmpleadoMan.Views.Empleados = Backbone.View.extend({
    el:'.page',
    //template:UserMan.Templates.users,
    initialize: function () {
        _.bindAll(this, "render");
        this.collection.fetch({reset:true});
        this.collection.bind("reset", this.render);
    },
  
    render: function(){
        //console.log("render");   
        //console.log(this.collection.length);     
        //$(this.el).html();
        var empleados = this.collection;
        var template = _.template($('#user-list-template').html(), {empleados: empleados.models});
        this.$el.html(template);
        //console.log(this.collection.length);
    }
});