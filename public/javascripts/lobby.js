$(function() {
var createButton = $("#create");
var joinButton = $("#join");

createButton.click(function () {
    var gameName=prompt("Please enter a name for your game");
    $.post('/game/new',{name: gameName}, function () {
        window.location='/play/'+gameName;
        });
});


joinButton.click(function () {
    createGameList();
});


createGameList = function () {
    var list=$("<div id='gamelist' class='gamelist col'></div>");
    $.getJSON('/game/all', function (data) {
        for (game in data){
            list.append("<h3><a href='#'>" + game + "</a></h3>");
            list.append(createGameSelect(data[game]));
        }
        list.accordion({autoHeight: false});
        $('#joinDisplayRow').append(list);
    });
};

createGameSelect = function (game) {
    var gameSelectDiv=$("<div></div>");
    gameSelectDiv.append("<p> Owner: "+ game.owner.username + "</p>");
    var players=$("<p> Players: </p>");
    for (player in game.users){
        players.append("<br>"+game.users[player].username);
    }
    gameSelectDiv.append(players);
    gameSelectButton=$("<button id=" +game.id + ">Join </button>");
    gameSelectButton.click(function () {
        $.post(('/game/join'),{gameid: game.id}, function () {
                    window.location = '/play/+game.id';});
    });
    gameSelectDiv.append(gameSelectButton);
    return gameSelectDiv;
}                            

});
