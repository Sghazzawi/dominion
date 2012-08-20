Regions=Backbone.Collection.extend({
model: Region
});

var Board=Backbone.Model.extend({
initialize: function(){
  this.regions=new Regions();
},
addRegion: function(region){
  this.regions.add(region);
}
,
render: function (){
  for (var x=0;x<this.regions.length;x++){
    if (typeof this.regions.at(x).get('view').render !== 'undefined')
     c=this.regions.at(x).get('view').render();
     this.regions.at(x).set({jqo: $(c.node)});
     this.regions.at(x).get('jqo').hover(function() {$(this).attr('fill','grey');});
  }
}
});
