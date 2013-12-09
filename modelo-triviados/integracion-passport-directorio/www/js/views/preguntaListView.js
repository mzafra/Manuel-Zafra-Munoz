
PreguntaMan.Views.Preguntas = Backbone.View.extend({
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
        var preguntas = this.collection;
        var template = _.template($('#pregunta-list-template').html(), {preguntas: preguntas.models});
        this.$el.html(template);
        //console.log(this.collection.length);
    }
});