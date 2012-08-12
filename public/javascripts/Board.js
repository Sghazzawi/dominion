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
});
