$(function(){
var gamePaper=Raphael("main",978,600);
var createRegionRenderFunct= function (paper) {
    return function (region) {
        return function () {
            return paper[region.type](region.d).attr(region.attr);
            }
        }
}
var joinGame = function (gameID) {

}
var regionRenderFunct = createRegionRenderFunct(gamePaper);
$.getJSON("/game/" + window.location.pathname.split("/").pop() ,function(data){
var gameObject=data;
 for (region in gameObject.boards['realmboard'].regions){
     gameObject.boards['realmboard'].regions[region].render=regionRenderFunct( gameObject.boards['realmboard'].regions[region]);
     gameObject.boards['realmboard'].regions[region].render();
}
}.bind(this));
});

