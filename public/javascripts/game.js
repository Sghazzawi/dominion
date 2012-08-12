var board = new Board();
for (var territory in Territories){
var territoryFill=ContinentValues[CountryToContinent[territory]].color;
region=new Region();
region.set({
  type: 'path',
  d: Territories[territory],
  attr: {stroke: '#555',
         style: "z-index: 2",
         strokeWidth: 1,
         fill: territoryFill }
})
board.addRegion(region);
}
