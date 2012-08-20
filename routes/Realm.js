var Region=require("./Region.js"),
    Board=require("./Board.js"),
    Game=require("./Game.js"),
    Territories=require("./Territories.js"),
    ContinentValues=require("./ContinentValues.js"),
    CountryToContinent=require("./CountryToContinent.js");
    
var realmClass=module.exports=function(id){
   var realm= new Game(id);
   var board= new Board('realmboard');
   for (var territory in Territories){
      var terriFill=ContinentValues[CountryToContinent[territory]].color;
      var region = new Region(territory,
                              'path',
                              Territories[territory],
                              { stroke: '#555',
                                strokeWidth: 1,
                                fill: terriFill});
     board.addRegion(region);
   }
   realm.addBoard(board);
   return realm;
}

